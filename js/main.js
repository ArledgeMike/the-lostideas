$(document).ready(function(){
  function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
        
    return array;
  }     

  var playlist = [
    {
      title:"Vamos - Stones",
      mp3:"music/stones.mp3"
    },
    {
      title:"The Howl - Castaways",
      mp3:"music/castaways.mp3"
    },
    {
      title:"Bog Rot - Unbearable Weight",
      mp3:"music/bogrot.mp3"
    },
    {
      title:"THUNDERS - Noasis",
      mp3:"music/THUNDERS-Noasis.mp3"
    }
  ];

  shuffle(playlist);

	var playlistObj = new jPlayerPlaylist(
    {
		  jPlayer: "#jquery_jplayer_1",
		  cssSelectorAncestor: "#jp_container_1"
		},
    playlist,
    { 
      playListOptions: {
        autoPlay: false,
        shuffleOnLoop: false
      },
		  swfPath: "http://dev.thelostideas.com/js",
		  supplied:  "mp3",
		  wmode: "window",
		  smoothPlayBar: true,
		  keyEnabled: true,
      loop: true
	  }
  );

  $('.jp-title').text(playlistObj.playlist[playlistObj.current].title);

  $('.jp-next').click(function() {
    $('.jp-title').text(playlistObj.playlist[playlistObj.current].title);
  });

  $('.jp-title').show(); 
});
