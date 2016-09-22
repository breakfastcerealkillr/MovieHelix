//data set here

function searchMovie(value){
        var xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        
        xhr.onreadystatechange = function(e){
            console.log(this);
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    // debugger;
                    // console.log(xhr.response);
                    //response.innerHTML = xhr.response;
					  movies.push(JSON.parse(xhr.response));
					  var button = document.getElementById("searchButton");
					  button.disabled  = false;
					  
                } else {
                    console.error("XHR didn't work: ", xhr.status);
                }
            }
        };
        xhr.ontimeout = function (){
            console.error("request timedout: ", xhr);
        };
        var test = xhr.open("get", "https://www.omdbapi.com/?t="+value+"&y=&plot=short&r=json", /*async*/ true);
        // xhr.responseType = "text";
        xhr.send();
		
       }