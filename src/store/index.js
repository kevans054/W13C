import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    playlistSongs: [],
    songs: [
      {
        title: "Do They Know Its Christmas",
        artist: "Bandaid",
      },
      {
        title: "A Holy Joly Christmas",
        artist: "Burl Ives",
      },
      {
        title: "Last Christmas",
        artist: "Wham",
      },
      {
        title: "God Rest Ye Merry Gentlemen",
        artist: "Pentatonix",
      },
      {
        title: "The Little Drummer Boy",
        artist: "Bing Crosby",
      },
    ],
  },
  mutations: {
    addNewSong(state, song) {
      state.songs.splice(0, 0, song);
    },
    addToMyPlaylist(state, index) {
      let song = state.songs.splice(index, 1)[0];
      state.playlistSongs.splice(0, 0, song);
    },
    removeFromPlaylist(state, index) {
        let song = state.playlistSongs.splice(index, 1)[0];
        state.songs.splice(0, 0, song);
      },
  },
  actions: {
  },
  modules: {
  }
})
