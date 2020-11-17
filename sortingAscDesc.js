const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => {
	if (a - b < 0) {
		console.log(`${a} is lowver than ${b}`);
	} else {
		console.log(`${a} is greater than ${b}`);
	}
});
