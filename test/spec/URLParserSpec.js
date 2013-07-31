describe("UrlParser", function(){
	it("should return the right url", function(){

		var result = parseURL("http://maps.apple.com/?lsp=9902&sll=-43.575285,172.762549&q=Sumner,%20New%20Zealand");	
		expect(result).toEqual("comgooglemaps://?center=-43.575285,172.762549&zoom=14&views=traffic");
		expect(result).not.toEqual("haha");
	});
	// it("given url must in the right format"), function(){
	// 	//expect(appleURL).toMatch(/eg/);
	// 	expect("Strin").toMatch(/ab+c/);
	// };
	it("have a object a and have foo property", function(){
		expect(a.bar).toBeDefined();
	});
});

describe("Jasmine", function(){
	var aa;
	it("for namespace test", function(){
		var a = 1;
		expect(a).toBeUnDefined();
	});

	it("has it's own name space", function(){
		//var aa = 1;
		expect(aa).toBeDefined();
	});

	it("can have 2 expect", function(){
		expect("3").toEqual("1");
		expect("2").toEqual("1");
	});

});
