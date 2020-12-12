const songsReducer = () => {
  return [
    { type: 'Full Stack Engine', duration: '40:10' },
    { type: 'Kubernintes Engine', duration: '66:40' },
    { type: 'React Engine', duration: '79:19' },
    { type: 'Backend Engine', duration: '54:51' },
  ];
};

const selectedSongReducer = (selectdSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectdSong;
};
