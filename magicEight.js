
// It is certain
// It is decidedly so
// Without a doubt
// Yes definitely
// You may rely on it
// As I see it, yes
// Most likely
// Outlook good
// Yes
// Signs point to yes
// Reply hazy try again
// Ask again later
// Better not tell you now
// Cannot predict now
// Concentrate and ask again
// Don't count on it
// My reply is no
// My sources say no
// Outlook not so good
// Very doubtful

//initialize
var net = require('net');
var fs = require('fs');
var port = 3000;
//random function


//Answers
var answer = ["It is certain", "It is decidedly so", "As I see it, yes", "Signs point to yes", "Cannot predict now", "Outlook not so good", "Very doubtful", "My sources say no"]

//create server
var server = net.createServer(function(connection){
	connection.write("This is a Magic Eight Ball program \n");
	connection.write("Ask a Question.... \n");

	connection.on('data',function(input){
		var randomnumber = Math.floor(Math.random() * answer.length) + 1
		var questionMark = false;
		console.log(randomnumber);
		var questions = input.toString().trim().split("");
		questions.forEach(function(elem){
			if(elem === '?'){
				questionMark = true;
			}
		})
		if(questionMark){
			connection.write(answer[randomnumber] + '\n');
			connection.write("Ask a Question.... \n");
		}else{
			connection.write("That is not a question...\n");
		}

	})

})

server.listen(port, function(){
	console.log("client connected");
	
})