function fibonacci(num) {
	let a=0
	let b=1;
	let c;
	if(num==0){
		return a;
	}
for (let index = 2; index <=num; index++) {
	 c=a+b;
	a=b;
	b=c;
}
	return b;
	
}

module.exports = fibonacci;
