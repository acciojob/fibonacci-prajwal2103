function fibonacci(num) {
	let a=0
	let b=1;
for (let index = 2; index <=50; index++) {
	let c=a+b;
	a=b;
	b=c;
}
	
}

module.exports = fibonacci;
