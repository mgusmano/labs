function sayHi() {
	alert('hi');
	var tl = new TimelineLite();
	var trump = document.getElementById('trump');
	tl.to(this.trump, 1, {y: 600, autoAlpha: 0, ease:Power1.easeOut});
}