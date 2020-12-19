<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="SongList" class="default">
    <ul>
      <li
        v-for="(song, index) in songs"
        :key="index"
        @click="addToMyPlaylist(index)"
      >
        {{ song.title }} - {{ song.artist }}
      </li>
    </ul>
    <h4>There are {{ songCount }} songs in the Christmas Song list</h4>
    <add-new-song></add-new-song>
  </div>
</template>

<script>
import AddNewSong from './AddNewSong';

export default {
  name: "SongList",
 
 components: {
    AddNewSong
  },

  computed: {
    songs()
      {
        return this.$store.state.songs;
      },
  
    songCount() {
      return this.songs.length;
    },
  },

  methods: {

    addToMyPlaylist(index) {
      this.$store.commit("addToMyPlaylist", index);
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