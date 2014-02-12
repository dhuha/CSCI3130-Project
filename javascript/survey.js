$(document).ready( function() {
	/*console.log("page ready");
	$.cookie("my_cookie",1,{ path : '/'},{ expires : 10 } );
	console.log($.cookie("my_cookie"));
	alert($.cookie("my_cookie"))
	*/
	$(submit).click(function(){
	// Tag variables for counting occurence.
		var lcardio =0;		// low cardio  variable
		var lstr= 0;			// low strenght variable
		var hcardio= 0;		//high cardio	varible
		var hstr= 0;		   // high strength variable
		var lintensity = 0; // low intensity	variable
		var hintensity = 0;
		var firstName = 0; 
		var lastName = 0;
		var gender = 0;
		var age = 0;
		
		firstName = $(F_name).val();
		lastName  = $(L_name).val();
		age = parseInt($(age).val());
		gender = $('input[name = t_gender]:checked').val();
		
		// Process tags for age.
		if(age > 40){
			lcardio += (age - 40)/10;
			lstr += (age - 40)/10;
		}
		//Special condition tags processing.
		console.log($(diabetes).val());
		lintensity += $(diabetes).val().indexOf("diabetes") != -1 ?  5 : 0 ;
		lstr += $(heartD).val().indexOf("heartD") != -1 ? 2 : 0; 
		lcardio += $(heartD).val().indexOf("heartD") != -1 ? 5 : 0;
		lcardio	+= $(emphy).val().indexOf("emphy") != -1 ? 5 : 0;
		lintensity	+= $(emphy).val().indexOf("emphy") != -1 ? 5 : 0;
		lcardio	+= $(asthma).val().indexOf("asthma") != -1 ? 5 : 0;
		
		//
		console.log(parseInt($('input[name = fit]:checked').val()))
		 hintensity += parseInt($('input[name = fit]:checked').val());
		 lintensity += (5 - parseInt($('input[name = fit]:checked').val()));
		 
		 hcardio += parseInt($('input[name = fit1]:checked').val());
		 lcardio += (5 - parseInt($('input[name = fit1]:checked').val()));
		console.log(parseInt($('input[name = fit2]:checked').val()));
		 hstr += parseInt($('input[name = fit2]:checked').val());
		 lstr += (5 - parseInt($('input[name = fit2]:checked').val()));
		 
		 hstr += parseInt($('input[name = fit3]:checked').val());
		 lstr += (5 - parseInt($('input[name = fit3]:checked').val()));	 
		 
		 
		 

		 // lintensity= 1;
		 // hintensity= 2;
		 // lstr = 3;
		 // hstr = 4;
		 // lcardio = 5;
		 // hcardio = 6;



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

		 console.log(tags);
		
		 $.cookie("tags",tags,{ path : '/' , expires: 7});
		 $.cookie("user", firstName, { path: '/', expires: 7 })
		 alert($.cookie("tags")); 
	})
}) 

