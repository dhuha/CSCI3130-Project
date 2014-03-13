
/**
 * controls the form in the survey page
 * @module survey 
 * @requires jquery
 */

/**
 * handle form data on page load
 * @class ready 
 */
$(document).ready( function() {
	

/**
 * called when submit button is clicked
 * @event click 
 */
	$(submit).click(function(){
	// Tag variables for counting occurence.
		var lcardio =0;		// low cardio  
		var lstr= 0;			// low strenght 
		var hcardio= 0;		//high cardio	
		var hstr= 0;		   // high strength 
		var lintensity = 0; // low intensity	
		var hintensity = 0;
		var firstName = 0; 
		var lastName = 0;
		var gender = 0;
		var age = 0;
		

		/**
		 * parses the demographic data from the form and updates tags 
		 * @method demographics 
	 	 */
		//get the name and gender of user.
		firstName = $(F_name).val();
		lastName  = $(L_name).val();
		age = parseInt($(age).val());
		gender = $('input[name = t_gender]:checked').val();
		
		// Process tags for age.
		if(age > 40){
			lcardio += (age - 40)/10;
			lstr += (age - 40)/10;
		}

		
		/**
		 * parses the medical data from the form and updates tags 
		 * @method medical 
	 	 */
		console.log($(diabetes).val());
		lintensity += $(diabetes).val().indexOf("diabetes") != -1 ?  5 : 0 ;
		lstr += $(heartD).val().indexOf("heartD") != -1 ? 2 : 0; 
		lcardio += $(heartD).val().indexOf("heartD") != -1 ? 5 : 0;
		lcardio	+= $(emphy).val().indexOf("emphy") != -1 ? 5 : 0;
		lintensity	+= $(emphy).val().indexOf("emphy") != -1 ? 5 : 0;
		lcardio	+= $(asthma).val().indexOf("asthma") != -1 ? 5 : 0;
		
		
		/**
		 * parses the self rating data from the form and updates tags 
		 * @method  rating 
	 	 */
		hintensity += parseInt($('input[name = fit]:checked').val());
		lintensity += (5 - parseInt($('input[name = fit]:checked').val()));

		hcardio += parseInt($('input[name = fit1]:checked').val());
		lcardio += (5 - parseInt($('input[name = fit1]:checked').val()));
		
		hstr += parseInt($('input[name = fit2]:checked').val());
		lstr += (5 - parseInt($('input[name = fit2]:checked').val()));

		hstr += parseInt($('input[name = fit3]:checked').val());
		lstr += (5 - parseInt($('input[name = fit3]:checked').val()));	 


		/**
		 * uses the tag scores from the form data to generate a tag string 
		 * @method tagString 
		 * @return {String} tags a string of tags seperated by commas
	   */

		//add the tag vars to an array for easier processing
		var tags = '';
		var tagArray = new Array();
		tagArray[0] = lintensity;
		tagArray[1] = hintensity;
		tagArray[2] = lstr;
		tagArray[3] = hstr;
		tagArray[4] = lcardio;
		tagArray[5] = hcardio;

		console.log(tagArray);

		//get the top 3 rated tags
		for(var i=0;i<3;i++){
			var max = -1;
			for(var j=0;j<6;j++){
				if(tagArray[j]>max){
					max = j
				}
			}
			switch(max){
				case 0:
				tags += 'lowIntensity, ';
				break;
				case 1:
				tags += 'highIntensity, ';
				break;
				case 2:
				tags += 'lowStrength, ';
				break;
				case 3:
				tags += 'highStrength, ';
				break;
				case 4:
				tags += 'lowCardio, ';
				break;
				case 5:
				tags += 'highCardio, ';
				break;
			}
			tagArray[max] = -1;
		}
		var username = firstName + "_" + lastName ;
		//Add a new user to the server!
		console.log("attempting to post");

		/**
		 * creates a new user and sends to the server to be added to the database
		 * @method post 
		 * @return {function} callback changes the page upon successfull user creation 
	 	*/
		$.post("http://centi.cs.dal.ca:60000/user/add",{username: username , tags: tags }, function(data, textStatus,jqXHR){
			//load the next page on successful add 
			console.log("server returned: " + data);
			$.cookie("username",username,{path:"/", expires:7});
			var cont = false;
			cont = window.confirm("Continue?");
			if(cont == true){
				window.location = "userpage.html";
				console.log("changing page");

			}
		});
	})
}) 

