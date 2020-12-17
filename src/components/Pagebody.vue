<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
 <div>
      <ul>
        <li v-for="(mySong, index) in mySongs" :key="index">{{ mySong.title + '    by     ' + mySong.artist }}</li>
     </ul>
     <!-- <h4>There are {{songCount}} songs in the selection list</h4> -->
        <button @click="$emit('clearSongs')">Clear Songs</button>
       
     </div>
</template>

<script>
// import SongList from '../Songlist.vue'
export default {
    name: 'page-body',
    props: {
     mySongs: Array,
   //   songCount: String,
     clearSongs: Boolean
    }
}
</script>

<style scoped>

</style>