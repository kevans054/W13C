<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="pagebody">
    <h1>My Christmas PlayList</h1>
    <play-list :songs="playlistSongs" @remove="addToSonglist"></play-list>
    <h1>The Christmas Song List</h1>
    <song-list :songs="songs" @add="addToPlaylist"></song-list>
  </div>
</template>

<script>
import SongList from "./Songlist.vue";
import PlayList from "./Playlist.vue";
export default {
  name: "page-body",
  components: {
    PlayList,
    SongList,
  },
  data() {
    return {
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
    };
  },

  computed: {
    songCount() {
      return this.Songs.length;
    },
  },

  methods: {
    addToPlaylist(index) {
      let song = this.songs.splice(index, 1)[0];
      this.playlistSongs.splice(0, 0, song);
    },
    addToSonglist(index) {
      let song = this.playlistSongs.splice(index, 1)[0];
      this.songs.splice(0, 0, song);
    },
  },
};
</script>

<style scoped>
div {
  background-color: red;
}
</style>