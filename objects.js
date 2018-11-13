const playlist = {
  artistName: '',
  songTitle: ''
}

function updatePlaylist(playlist, artistName, songTitle){
  var playlist.artistName = [""];
  playlist;
  var playlist.songTitle = [""];
  playlist;
}



function removeFromPlaylist(object, artistName){
  var obj = Object.assign({},object);
  delete obj[artistName];
  return obj;
}
