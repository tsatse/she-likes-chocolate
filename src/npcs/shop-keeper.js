function ShopKeeper(description, character) {
    this.character = character;
}

ShopKeeper.prototype = {
    update: function update() {
        this.character.dx = 1;
    }
};


module.exports = ShopKeeper;