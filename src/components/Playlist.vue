<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div>
    <ul>
      <li
        v-for="(song, index) in sSongs"
        :key="index"
        @click="removeFromPlaylist(index)"
      >
        {{ songs.title }} - {{ songs.artist }}
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
      return this.$store.state.playlistSongs.length;
    },
    songs()
      {
        return this.$store.state.playlistSongs;
      },
  },
  methods: {
    moveToMyPlaylist(index) {
     this.$store.commit("moveToMyPlaylist", index);
    },
    removeFromPlaylist(index) {
      // splice the song out of playlistSongs and in to songs
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