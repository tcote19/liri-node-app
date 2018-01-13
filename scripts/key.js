console.log('Data loaded');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '33tZzHBwwktNOCQc5Ndsg26zK',
  consumer_secret: 'No7Aq0vJAiX2Gvzu2bH43dnqueOGfZN6zZcTftAXWHgEf44eCE',
  access_token_key: '951309305717796865-UX5DyOO6aWgRslS3EirIghMR6YQHGQl',
  access_token_secret: 'mzBlDui0j5NvmYC6sNgmxoEoW1lUL01CYnQWy3VBRxpkQ',
});
// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: 'ada95c8d0dc34557b598fe04c36e5322',
//   secret: '9adb7b5e5d714cf287c298a1510e3809'
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

module.exports = client;