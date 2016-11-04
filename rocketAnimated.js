(function(window) {
Symbol_1 = function() {
	this.initialize();
}
Symbol_1._SpriteSheet = new createjs.SpriteSheet({images: ["Untitled-1.png"], frames: [[0,0,64,64,0,0,0],[0,0,64,64,0,0,0],[0,64,64,64,0,0,0],[0,128,64,70,0,0,0]]});
var Symbol_1_p = Symbol_1.prototype = new createjs.Sprite();
Symbol_1_p.Sprite_initialize = Symbol_1_p.initialize;
Symbol_1_p.initialize = function() {
	this.Sprite_initialize(Symbol_1._SpriteSheet);
	this.paused = false;
}
window.Symbol_1 = Symbol_1;
}(window));

