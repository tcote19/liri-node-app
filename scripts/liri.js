var myTweet = process.argv[2];
var request = require("request");
var twitterKeyItems = require("./key.js");

if (myTweet === "my-tweet"){
	myTweetRuns();
} else {
	console.log("please enter my-tweet as your third argument.");
}


function myTweetRuns(){
var twitterName = {screen_name: 'thetrain1919'};
twitterKeyItems.get('statuses/user_timeline', twitterName, function(error, tweets, response){
	if (!error){
		var tweetCount = tweets.length;

		for (var i = 0; i < tweets.length; i++){
			console.log("Tweet #" + tweetCount--);
			console.log(tweets[i].text);
			console.log(response.headers.date);
			console.log("--------------------------");
		}
	}

});
}
