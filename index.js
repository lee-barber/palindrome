function palindrome (x){
	var y = x.split('').reverse().join('');
	if (x.toLowerCase()===y.toLowerCase()){
		console.log( x  + ' is a palindrome.');
	} else {
		console.log(x  + ' is not a palindrome.');
	}
}