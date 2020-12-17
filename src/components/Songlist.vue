<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
    <div>
        <!-- <h1 v-html="heading"></h1> -->
        <!-- <input type="text"
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
        </ul> -->
        <!-- <h4>There are {{ SongCount }} songs in the selection list</h4> -->
        
        <button v-if="clearSongs = myclearSongs">Clear Songs</button>
    </div>
</template>

<script>
// import PageBody from '../Pagebody.vue'
export default {
  name: "SongList",
  props: {
      mySongs: Array,
      myclearSongs : Boolean,
      SongCount : Number
    
  },  

  data() {
    return {
        newSong: ''
        }
    },

    methods: {
        addSong() {
            this.$emit('add', this.newSong);
            this.newSong = '';
        },
        clearSongs() {
            this.$emit('clear');
           
        },
        isEven(n) {
            if ((n + 1) % 2 == 0) {
                return true;
            }
            return false;
        },
        
    }
};
</script>

<style scoped>
.even {
    background-color: rgb(231, 127, 231);
}
</style>