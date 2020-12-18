<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div>
    <ul>
      <li
        v-for="(song, index) in songs"
        :key="index"
        @click="removeFromPlaylist(index)"
      >
        {{ song.title }} - {{ song.artist }}
      </li>
    </ul>
    <h4>There are {{ songCount }} songs in your Christmas Playlist</h4>
  </div>
</template>

<script>
export default {
  name: "PlayList",
  props: {
    songs: Array,
  },
  computed: {
    songCount() {
      return this.songs.length;
    },
  },

  methods: {
    removeFromPlaylist(index) {
      // splice the song out of playlistSongs and in to songs
      this.$emit("remove", index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>