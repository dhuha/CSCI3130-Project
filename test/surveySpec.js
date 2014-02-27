
describe("form", function() {

    //vars for form component
    var submitButton;
    beforeEach(function() {
        //get the correct compenents of the field
        submitButton = document.getElementById('submit');
        $(F_name).val("Channing");
        $(L_name).val("Tadum");
        $(age).val(30);
        $(m_gender).prop('checked', true);

        $(asthma).prop('checked', true);
        $(fit_4).prop('checked', true);
        $(fit1_5).prop('checked', true);
        $(fit2_3).prop('checked', true);
        $(fit3_1).prop('checked', true);
    })

    it('should have non empty data',function(){
        var name = $(F_name).val();             
        var lName = $(L_name).val();
        var gender = $('input[name = t_gender]:checked').val();
        expect(name != null);
        expect(name === "Channing");
        expect(lName === "Tadum");
        expect(gender === "Male");
    });

    it('should have non empty medical info', function(){

        var d = $(diabetes).val().indexOf("diabetes") != -1;
        var hd = $(heartD).val().indexOf("heartD") != -1; 
        var emp = $(emphy).val().indexOf("emphy") != -1;
        var ash = $(asthma).val().indexOf("asthma") != -1;
        expect(d === false);
        expect(emp === false);
        expect(ash === true);
    });

    it('should have non empty fitness info', function(){

        var f = parseInt($('input[name = fit]:checked').val());
        var f1 = parseInt($('input[name = fit1]:checked').val());
        var f2 = parseInt($('input[name = fit2]:checked').val());
        var f3 = parseInt($('input[name = fit3]:checked').val());
        expect(f === 4);
        expect(f1 === 5);
        expect(f2 === 3);
        expect(f3 === 1);

    });




})          
