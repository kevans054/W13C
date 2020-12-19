<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="pagebody">
    <div>
      <h1>The Christmas Song List</h1>
      <song-list></song-list>
    </div>
    <div>
      <h1>My Christmas PlayList</h1>
      <play-list></play-list>
    </div>
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
#pagebody {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  background-color: red;
}
</style>