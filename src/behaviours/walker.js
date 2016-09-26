function Walker(definition, character) {
    this.wayPoints = definition.wayPoints;
    this.currentWaypoint = null;
}

Walker.prototype = {
    incWayPoint: function incWayPoint() {
        this.currentWaypoint = (this.currentWaypoint + 1) % this.wayPoints.length;
    },

    update: function update() {
        if(this.currentWaypoint === null) {
            this.character.x = this.wayPoints[0].x;
            this.character.y = this.wayPoints[0].y;
            this.incWayPoint();
            return;
        }
        var currentWaypoint = this.wayPoints[this.currentWaypoint];
        var walkVector = {
            x: currentWaypoint.x - this.character.x,
            y: currentWaypoint.y - this.character.y
        };
        var distanceFromNextWaypoint = Math.sqrt((walkVector.x) * (walkVector.x) + (walkVector.y) * (walkVector.y));
        if(distanceFromNextWaypoint < 10) {
            this.character.x = this.wayPoints[this.currentWaypoint].x;
            this.character.y = this.wayPoints[this.currentWaypoint].y;
            this.incWayPoint();
            return;
        }
        walkVector.x = walkVector.x / distanceFromNextWaypoint;
        walkVector.y = walkVector.y / distanceFromNextWaypoint;
        this.character.dx = walkVector.x * 2;
        this.character.dy = walkVector.y * 2;
    },
    
    action: function action() {
        
    }
};


module.exports = Walker;
