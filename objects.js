const playlist = {
  artistName: '',
  songTitle: ''
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]
}

function removeFromPlaylist(object, artistName){
  var obj = Object.assign({},object);
  delete obj[artistName];
  return obj;
}
