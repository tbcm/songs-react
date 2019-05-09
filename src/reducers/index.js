import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'No scrubs 1', duration: '2:05'},
        {title: 'No scrubs 2', duration: '3:05'},
        {title: 'No scrubs 3 ', duration: '4:30'},
    ];
};

const selectSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectSongReducer
});