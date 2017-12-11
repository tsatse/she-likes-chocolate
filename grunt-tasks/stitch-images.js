var fs = require('fs');
var path = require('path');

var RSVP = require('rsvp');
var PNG = require('pngjs').PNG;


function promisify(func) {
    return new RSVP.Promise(function(resolve, reject) {
        func(function() {
            resolve(this);
        });
    });
}

function getImagePromise(fileName) {
    var pipe = fs.createReadStream(fileName)
        .pipe(new PNG({
            filterType: 4
        }));
    return promisify(
        pipe.on.bind(pipe, 'parsed')
    );
}

function transparentize(image) {
    var makeTransparent;
    var index;
    var i;
    var j;
    var colorKey = {
        r: image.data[0],
        g: image.data[1],
        b: image.data[2]
    };

    for(j = 0 ; j < image.height ; j++) {
        for(i = 0 ; i < image.width ; i++) {
            index = (image.width * j + i) << 2;
            makeTransparent = false;
            if(
                image.data[index + 0] === colorKey.r ||
                image.data[index + 1] === colorKey.g ||
                image.data[index + 2] === colorKey.b
            ) {
                makeTransparent = true;
            }
            if(makeTransparent) {
                image.data[index + 3] = 0;
            }
        }
    }
    return image;
}

function processImages(sourcePath, destinationPath) {
    var jobPromises = fs.readdirSync(sourcePath)
        .filter(function(fileName) {
            var currentPath = path.join(sourcePath, fileName);
            var stat = fs.statSync(currentPath);
            if(stat.isDirectory()) {
                return true;
            }
        })
        .map(function(fileName) {
            var currentPath = path.join(sourcePath, fileName);
            return {
                frames: fs.readdirSync(path.join(sourcePath, fileName)).map(function(imageFile) {return path.join(sourcePath, fileName, imageFile);}),
                name: fileName
            };
        })
        .reduce(function(objectSoFar, job) {
            objectSoFar[job.name] = RSVP.all(job.frames.map(getImagePromise));
            return objectSoFar;
        }, {});

        return RSVP.hash(jobPromises)
            .then(function(jobs) {
                var bigImage;
                Object.keys(jobs)
                    .forEach(function(jobName) {
                        var job = jobs[jobName];
                        var singleWidth = job[0].width;
                        var width = job.reduce(function(widthSoFar, image) {return widthSoFar + image.width;}, 0);
                        var height = job[0].height;

                        var outputImage = new PNG({
                            width: width,
                            height: height
                        });
                        job.map(transparentize)
                            .forEach(function(image, index) {
                                image.bitblt(outputImage, 0, 0, image.width, image.height, index * singleWidth, 0);
                            });

                        var outputPath = path.join(destinationPath, jobName + '.png');
                        console.log('creating image ' + outputPath);
                        outputImage.pack().pipe(fs.createWriteStream(outputPath));
                    });
            })
            .catch(function(error) {
                console.error(error);
            });
}


module.exports = processImages;
console.log('args : ', process.argv[2], process.argv[3]);

processImages(process.argv[2], process.argv[3]);
