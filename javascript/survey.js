$(document).ready( function() {
	/*console.log("page ready");
	$.cookie("my_cookie",1,{ path : '/'},{ expires : 10 } );
	console.log($.cookie("my_cookie"));
	alert($.cookie("my_cookie"))
	*/
	$(submit).click(function(){
	// Tag variables for counting occurence.
		var lcardio;		// low cardio  variable
		var lstr;			// low strenght variable
		var hcardio;		//high cardio	varible
		var hstr;		   // high strength variable
		var lintensity; // low intensity	variable
		var hintensity;
		var firstName; 
		var lastName;
		var gender;
		var age;
		
		firstName = $(F_name).val();
		lastName  = $(L_name).val();
		age = $(age).val();
		gender = $('input[name = t_gender]:checked').val();
		
		// Process tags for age.
		if(age > 40){
			lcardio += (age - 40)/10;
			lstr += (age - 40)/10;
		}
		// Special condition tags processing.
		lintensity += $(diabetes).val() ?  5 : 0 ;
		lstr += $(heartD).val() ? 2 : 0; 
		lcardio += $(heartD).val() ? 5 : 0;
		lcardio	+= $(emphy).val() ? 5 : 0;
		lintensity	+= $(emphy).val() ? 5 : 0;
		lcardio	+= $(asthma).val() ? 5 : 0;
		
		//
		 hintensity += $('input[name = fit]:checked').val();
		 lintensity += (5 - ($('input[name = fit]:checked').val()));
		 
		 hcardio += $('input[name = fit1]:checked').val();
		 lcardio += (5 - ($('input[name = fit1]:checked').val()));
		
		 hstr += $('input[name = fit2]:checked').val();
		 lstr += (5 - ($('input[name = fit2]:checked').val()));
		 
		 hstr += $('input[name = fit3]:checked').val();
		 lstr += (5 - ($('input[name = fit3]:checked').val()));	 
		 
		 
		 var tags = '';
		 var tagArray = new Array();
		 tagArray[0] = lintensity;
		 tagArray[1] = hintensity;
		 tagArray[2] = lstr;
		 tagArray[3] = hstr;
		 tagArray[4] = lcardio;
		 tagArray[5] = hcardio;
		 
		 console.log(tagArray);
		 
		 for(var i=0;i<3;i++){
			var max = -1;
			for(var j=0;j<6;j++){
				if(tagArray[j]>max){
					max = j
				}
			}
			switch(max){
				case 0:
					tags += 'low intensity, ';
					break;
				case 1:
					tags += 'high intensity, ';
					break;
				case 2:
					tags += 'low strength, ';
					break;
				case 3:
					tags += 'high strength, ';
					break;
				case 4:
					tags += 'low cardio, ';
					break;
				case 5:
					tags += 'high cardio, ';
					break;
			}
			tagArray[max] = -1;
		 }
		 
		 alert(tags);
		 
		
		 
	})
	
	} )

