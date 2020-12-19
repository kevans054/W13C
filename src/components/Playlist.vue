<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="PlayList">
    <ul>
      <li
        v-for="(Song, index) in Songs"
        :key="index"
        @click="removeFromPlaylist(index)"
      >
        {{ song.title }} - {{ song.artist }}
      </li>
    </ul>
    <h4>There are {{ playlistSongCount }} songs in your Christmas Playlist</h4>
  </div>
</template>

<script>
export default {
  name: "PlayList",
  computed: {
    playlistSongCount() {
      return this.playlistSongs.length;
    },
    songs()
      {
        return this.$store.state.playlistSongs;
      },
  },
  methods: {
   
    removeFromPlaylist(index) {
      this.$store.commit("removeFromPlaylist", index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>