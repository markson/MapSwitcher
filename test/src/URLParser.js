var title = null;
var urlMatcher = 'bar';
var a = {
	foo:'foo'
};
var appleURL = "http://maps.apple.com/?lsp=9902&sll=-43.575285,172.762549&q=Sumner,%20New%20Zealand"; 
var parseURL = function(appleURL){
	var googleURL;
	// var twoValueMatcher = /-?\d+\.\d{6},-?\d+\.\d{6}/;
	// var twoValue = appleURL.match(twoValueMatcher)[0];
	// var firstValueMatcher = /-?\d+\.\d{6}/;
	// var firstValue = twoValue.match(firstValueMatcher)[0];
	// var secondValueMatcher = /,-?\d+\.\d{6}/;
	// var secondValue = twoValue.match(secondValueMatcher)[0].replace(/^,/,''); 
	 var matcher = /-?\d+\.\d{6}/g;
	 var matchResult = appleURL.match(matcher);
	googleURL = "comgooglemaps://?center=" + matcher[0] +','+ matcher[1] + "&zoom=14&views=traffic";
	return googleURL;
};
