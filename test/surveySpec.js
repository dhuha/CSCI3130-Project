
describe("form", function() {

	//vars for form components
	var submitButton;
	var fNameField;
	beforeEach(function() {
		//get the correct compenents of the field
		submitButton = document.getElementById('submit');
		fNameField = document.getElementById('F_Name');
	})

	it('should get data from the form', function(){
		//setr the first name to a value
		fNameField.Value= 'NAME';
		//click the submit button
		submitButton.click();
		//check if values have changed accrodingly 			
		expect(false);
	})
})