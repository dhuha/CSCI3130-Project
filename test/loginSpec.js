describe("form", function() {

    //vars for form component
    var submitButton;
    beforeEach(function() {
        //get the correct compenents of the field
        submitButton = document.getElementById('submit');
        $(user_name).val("Channing");
        $(password).val("hello");
    })

    it('should have non empty data',function(){
        var username = $(user_name).val();             
        var pass = $(password).val();
        expect(username != null).toEqual(true);
        expect(password != null).toEqual(true);
    });
	
	
	it('should create a cookie with non null username',function(){
        submitButton.click();
        var  cookieText = $.cookie("username");
        console.log(cookieText == null);
        expect(cookieText != null ).toEqual(true);
    });
})          



describe("Server", function() {

    //vars for form component
    var username = "USER" + Math.random();
    var tags = "lowIntensity";
    beforeEach(function() {
        //get the correct compenents of the field
        submitButton = document.getElementById('submit');
        
    })
    it('should contact the server',function(){

        $.get("http://centi.cs.dal.ca:60000/hello",function(data,textStatus,jqXHR){
            expect(data).toEqual('hello');
        })
    });
})  
