function fibonacci(num) {
	let a=0
	let b=1;
	let c;
	if(num==1){
		return a;
	}
	if(num==2){
		return b;
	}
for (let index = 3; index <=num; index++) {
	 c=a+b;
	a=b;
	b=c;
}
	return b;
	
}

module.exports = fibonacci;
