const playlist = {
  artistName: '',
  songTitle: ''
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign
}



function removeFromPlaylist(object, artistName){
  var obj = Object.assign({},object);
  delete obj[artistName];
  return obj;
}
