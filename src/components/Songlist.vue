<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
    <div>
        <h1 v-html="heading"></h1>
        <input type="text"
        v-model="newSong"
        @keypress.enter="addSong">
        <ul>
            <li v-if="newSong">{{ newSong }}</li>
            <li 
                v-for="(mySong, index) in mySongs"
                @click="removeSong(index)"
                :class="[ 'mySongs', {'even': isEven(index)} ]"
                :key="index">
                <input type="checkbox" v-bind:name="`Mysongs.title[${index}]`">
            </li>
        </ul>
        <h4>There are {{ songCount }} songs in the selection list</h4>
        <button @click="clearSongs">Clear Songs</button>
    </div>
</template>

<script>
export default {
  name: "SongList",
  props: {
      mySongs: Array,

  },  

  data() {
    return {
        newSong: ''
    }
  },

    computed: {
        songCount() {
            return this.mySongs.length;
        }
    },

    methods: {
        addSong() {
            this.$emit('add', this.newSong);
            this.newSong = '';
        },
        clearSongss() {
            this.$emit('clear');
        },
        isEven(n) {
            if ((n + 1) % 2 == 0) {
                return true;
            }
            return false;
        },
        // removeSong(index) {
            // this is bad - instead emit an event to the parent,
            // and modify the data there instead. Don't manipulate props
            // directly
            // console.log('Target', index);
            // this.songs.splice(index, 1);
        // }
    }
};
</script>

<style scoped>
.even {
    background-color: rgb(231, 127, 231);
}
</style>