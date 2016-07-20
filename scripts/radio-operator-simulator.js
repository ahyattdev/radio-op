var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "game");

var defaultStyle = {
    font: "24px Arial",
    fill: "#FFFFFF"
};

var defaultStyleCentered = {
    font: "24px Arial",
    fill: "#FFFFFF",
    align: "center"
};

var selectedStyle = {
    font: "24px Arial",
    fill: "#FF0000"
}

var solvedStyle = {
    font: "24px Arial",
    fill: "#00FF00"
}

game.state.add("load", load);
game.state.add("menu", menu);
game.state.add("titanic", new Titanic());
game.state.add("pearlharbor", new PearlHarbor());

game.state.start("load");
