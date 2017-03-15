
var rl = require('readline');
 
var prompts = rl.createInterface(process.stdin, process.stdout);
prompts.question("Please enter your Username to see a list of your Repo", 
                  function(myName){


function loadGitHubProfile(myName) {

	var webRequest = require("https");
	var myConditions = {
		host: "api.github.com",
        method: "GET",
		headers: {"user-agent": "node.js"},
		path: "/users/" + myName+"/repos"		
	};

	webRequest.get(myConditions, function(response) {
	  
	  response.on('data', function(myData) {
	    
	    var resultString = myData.toString();
	    console.log(resultString);
      
	  });
	  
	})
	.on("error", function(e) {
	  
	  console.log("An error was encountered: " + e.message);
    
	});
}
 
 process.exit(); 
});




