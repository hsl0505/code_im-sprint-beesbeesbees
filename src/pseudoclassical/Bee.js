var Grub = require('./Grub');

// Object.create(Grub) 상속을 받는다...

var Bee = function() {
	Grub.call(this); // 프로퍼티 연결
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype); // 메소드 연결
Bee.prototype.constructor = Bee; // 생성자 연결안하고 생성하면 Bee.costructor에 grub이 들어간다

module.exports = Bee;
