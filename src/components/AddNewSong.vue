<template>
  <div>
    <input type="text" placeholder="Title" v-model="newTitle" />
    <input type="text" placeholder="Artist" v-model="newArtist" />

    <button type="submit">Add</button>
  </div>
</template>
<script>
export default {
  name: "AddNewSong",

  data() {
    return {
      newTitle: "",
      newArtist: "",
    };
  },

  methods: {
    addNewSong() {
      if (this.newTitle && this.newArtist) {
        this.$store.commit("addNewSong", {
          title: this.newTitle,
          artist: this.newArtist,
        });
        this.newTitle = "";
        this.newArtist = "";
      }
    }
  }
};
</script>
<style scoped>
</style>