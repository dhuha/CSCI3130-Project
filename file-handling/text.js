window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;
			var entireFile="";

			if (file.type.match(textType)) {
				var reader = new FileReader();
				reader.onload = function(e) {
					/*var cardRules = new Array();
					$.get('Cardio.txt', function(data){
					cardRules = data.split('|');
					console.log(cardRules);
					}*/
					
					var counter = 0;
					fileDisplayArea.innerText = reader.result;
					entireFile=reader.result;
					var n = entireFile.indexOf("|");
					var res = entireFile.substring(3,n);
					alert(res);
				}
				reader.readAsText(file);	
			} 
				else {
				fileDisplayArea.innerText = "File not supported!";
				}
				
			//parseText(entireFile);
		});
		
		
}
