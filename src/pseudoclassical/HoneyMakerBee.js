var Bee = require('./Bee');

var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

// 연결
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// 메소드 생성
HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot = this.honeyPot + 1;
	// console.log('honeyPot보여줘 : ', this.honeyPot);
};
HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot = this.honeyPot - 1;
	// console.log('honeyPot보여줘2 : ', this.honeyPot);
};

module.exports = HoneyMakerBee;
