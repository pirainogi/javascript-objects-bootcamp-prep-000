const playlist = {
  artistName: '',
  songTitle: ''
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return
}

function removeFromPlaylist(object, artistName){
  delete obj[artistName];
  return obj;
}
