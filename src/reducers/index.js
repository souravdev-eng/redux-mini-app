import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Full Stack Enginer', duration: '40:10' },
    { title: 'Kubernintes Enginer', duration: '66:40' },
    { title: 'React Enginer', duration: '79:19' },
    { title: 'Backend Enginer', duration: '54:51' },
  ];
};

const selectedSongReducer = (selectdSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectdSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
