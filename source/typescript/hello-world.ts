function area1(shape: string, width: number, height: number) {
	var area = width * height;
	return "I'm a " + shape + " with an area of " + area + ".";
}

document.body.innerHTML = area1("rectangle", 30, 15);