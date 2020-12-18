<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="Songlist">
    <ul>
      <li
        v-for="(song, index) in songs"
        :key="index"
        @click="moveToMyPlaylist(index)"
      >
        {{ song.title }} - {{ song.artist }}
      </li>
    </ul>
    <h4>There are {{ songCount }} songs in the Christmas Song list</h4>
  </div>
</template>

<script>
export default {
  name: "SongList",
  props: {
    songs: Array,
  },
  computed: {
    songCount() {
      return this.songs.length;
    },
  },

  methods: {
    moveToMyPlaylist(index) {
      this.$emit("add", index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>