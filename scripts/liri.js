var myTweet = process.argv[2];
var spotifySong = process.argv[2];
var spotifySongArtist = process.argv[4];
var movieTime = process.argv[2];
var doIt = process.argv[2];

var aceOfBase = "";

var request = require("request");
var twitterKeyItems = require("./key.js").client;
var spotifyKeyItems = require("./key.js").patron;

if (myTweet === "my-tweets"){
	myTweetRuns();
} else if (myTweet !== "my-tweets" && spotifySong !== "spotify-this-song"){
	console.log("--------------------------");
	console.log("ERROR: Please enter one of the following commands\nmy-tweets\nspotify-this-song <song title>");
} else if (spotifySong === "spotify-this-song" && process.argv[3] !== undefined && process.argv[4] === undefined && process.argv[5] === undefined && process.argv[6] === undefined) {
		var spotifySongTitle1st = process.argv[3];
		if (typeof spotifySongTitle1st === "string"){

		spotifyStuffOneWord();
		}
} else if (spotifySong === "spotify-this-song" && process.argv[3] !== undefined && process.argv[4] !== undefined && process.argv[5] === undefined && process.argv[6] === undefined) {
		var spotifySongTitle1st = process.argv[3];
		var spotifySongTitle2nd = process.argv[4];
		if (typeof spotifySongTitle1st === "string" && typeof spotifySongTitle2nd === "string"){

		spotifyStuffTwoWord();
		}
} else if (spotifySong === "spotify-this-song" && process.argv[3] !== undefined && process.argv[4] !== undefined && process.argv[5] !== undefined && process.argv[6] === undefined ) {
		var spotifySongTitle1st = process.argv[3];
		var spotifySongTitle2nd = process.argv[4];
		var spotifySongTitle3rd = process.argv[5];
		if (typeof spotifySongTitle1st === "string" && typeof spotifySongTitle2nd === "string" && typeof spotifySongTitle3rd === "string"){

		spotifyStuffThreeWord();
		}
} else if (spotifySong === "spotify-this-song" && process.argv[3] !== undefined && process.argv[4] !== undefined && process.argv[5] !== undefined && process.argv[6] !== undefined ) {
		var spotifySongTitle1st = process.argv[3];
		var spotifySongTitle2nd = process.argv[4];
		var spotifySongTitle3rd = process.argv[5];
		var spotifySongTitle4th = process.argv[6];
		if (typeof spotifySongTitle1st === "string" && typeof spotifySongTitle2nd === "string" && typeof spotifySongTitle3rd === "string" && typeof spotifySongTitle4th === "string"){

		spotifyStuffFourWord();
		}		
} else if (spotifySong === "spotify-this-song" && process.argv[3] === undefined && process.argv[4] === undefined && process.argv[5]=== undefined && process.argv[6] === undefined){
	aceOfBase = "Ace "+"of "+"Base";
	spotifyDeftFailure(); 
} else {
	console.log("ERROR: Please enter one of the following commands\nmy-tweets\nspotify-this-song <song title>");
}

// Twitter Function

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
};

// Spotify Functions

function spotifyStuffOneWord(){
	spotifyKeyItems.search({type: 'track', query: spotifySongTitle1st}, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	console.log("--------------------------");
	console.log("Artist: "+data.tracks.items[0].artists[0].name);
	console.log("Song: "+data.tracks.items[0].name);
	console.log("Album: "+data.tracks.items[0].album.name);
	console.log("Link: "+data.tracks.items[0].preview_url);
	});
};

function spotifyStuffTwoWord(){
	spotifyKeyItems.search({type: 'track', query: spotifySongTitle1st+" "+spotifySongTitle2nd}, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	console.log("--------------------------");
	console.log("Artist: "+data.tracks.items[0].artists[0].name);
	console.log("Song: "+data.tracks.items[0].name);
	console.log("Album: "+data.tracks.items[0].album.name);
	console.log("Link: "+data.tracks.items[0].preview_url);
	});
};

function spotifyStuffThreeWord(){
	spotifyKeyItems.search({type: 'track', query: spotifySongTitle1st+" "+spotifySongTitle2nd+" "+spotifySongTitle3rd}, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	console.log("--------------------------");
	console.log("Artist: "+data.tracks.items[0].artists[0].name);
	console.log("Song: "+data.tracks.items[0].name);
	console.log("Album: "+data.tracks.items[0].album.name);
	console.log("Link: "+data.tracks.items[0].preview_url);
	});
};

function spotifyStuffFourWord(){
	spotifyKeyItems.search({type: 'track', query: spotifySongTitle1st+" "+spotifySongTitle2nd+" "+spotifySongTitle3rd+" "+spotifySongTitle4th}, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	console.log("--------------------------");
	console.log("Artist: "+data.tracks.items[0].artists[0].name);
	console.log("Song: "+data.tracks.items[0].name);
	console.log("Album: "+data.tracks.items[0].album.name);
	console.log("Link: "+data.tracks.items[0].preview_url);
	});
};
function spotifyDeftFailure(){
	spotifyKeyItems.search({type: 'track', query: aceOfBase}, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	console.log("--------------------------");
	console.log("Artist: "+data.tracks.items[0].artists[0].name);
	console.log("Song: "+data.tracks.items[0].name);
	console.log("Album: "+data.tracks.items[0].album.name);
	console.log("Link: "+data.tracks.items[0].preview_url);
	});
};









