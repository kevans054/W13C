<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="PlayList" class="default">
    <ul>
      <li
        v-for="(song, index) in songs"
        :key="index"
        @click="removeFromPlaylist(index)"
      >
        {{ song.title }} - {{ song.artist }}
      </li>
    </ul>
    <!-- <h4>There are {{ playlistSongsCount }} songs in your Christmas Playlist</h4> -->
  </div>
</template>

<script>
export default {
  name: "PlayList",
  computed: {
    // playlistSongsCount() {
    //   return this.playlistSongs.length;
    // },
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
.default {cursor: default;}
ul {
  list-style-type: none;
}
</style>