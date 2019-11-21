var Bee = require('./Bee');

var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};

// Bee 를 받자
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// 메소드 생성
ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure);
};

module.exports = ForagerBee;
