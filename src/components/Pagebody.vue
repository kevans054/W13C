<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="pagebody">
    <h1>My Christmas PlayList</h1>
    <play-list></play-list>
    <h1>The Christmas Song List</h1>
    <song-list></song-list>
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
    }
  }
};
</script>

<style scoped>
div {
  background-color: red;
}
</style>