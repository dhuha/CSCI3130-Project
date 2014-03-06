describe("Reccomendations", function() {
    beforeEach(function() {
    });
    it('should fail',function(){
        expect(true).toEqual(false);
    })
    it('should get non empty tags',function(){

    });
    it('should get a response from the server',function(){
        var hello;
        $.get("centi.cs.dal.ca:30000/hello" ,
            function(data, textStatus, jqXHR){
                console.log(data);
                return expect(data).toEqual("hello world");
            }
        )
    });
    it('should show reccomendations',function(){

    });
    it('should show graph'function(){

    });
})          
