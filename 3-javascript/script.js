			var t0 = performance.now();
			
			
			// This is to generate random color. It works by select all possible charset from color code and split into a list. Then randomly choose the charset and append it.
			
			function getRandomColor() {
				var letters = '0123456789ABCDEF'.split('');
				
				var color = '#';
				
				for (var i = 0; i < 6; i++ ) {
				
					color += letters[Math.floor(Math.random() * 16)];
					
				}
				
				return color;
			}
			
			// Randomly select the top, left, width (height is equal width so that it makes a perfect shape)
			
			function makeShapeAppear() {
				
				var top = Math.random() * 400;
				
				var width = (Math.random() * 300) + 100;
				
				var left = Math.random() * 400;
				
				if (Math.random() > 0.5) {
				
					document.getElementById("shape").style.borderRadius = "50%";
				
				} else {
				
					document.getElementById("shape").style.borderRadius = "0";
				
				}
			
				document.getElementById("shape").style.top = top + "px";
				
				document.getElementById("shape").style.width = width + "px";
				
				document.getElementById("shape").style.height = width + "px";
				
				document.getElementById("shape").style.left = left + "px";
				
				document.getElementById("shape").style.backgroundColor = getRandomColor();
				
				document.getElementById("shape").style.display = "block";
				
				t0 = performance.now();
				
			}
			
			// Below function is to make the set reappear randomly from 0s to 2s
			
			function delayTimer() {
				
				setTimeout(makeShapeAppear, Math.random() * 2000);
				
			}
			
			// Below function is to start the delayTimer()function, then the counter starts, click, counter stops and calculate the time difference and show it
			
			delayTimer();
			
			document.getElementById("shape").onclick = function() {
				
				document.getElementById("shape").style.display = "none";
				
				var t1 = performance.now();
				
				var timeTaken = ((t1 - t0) / 1000).toFixed(3);
				
				document.getElementById("timeTaken").innerHTML = timeTaken + "s";
				
				delayTimer();
				
			}