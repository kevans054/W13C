<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
 <div>
      <ul>
        <li v-for="(mySong, index) in mySongs" :key="index">{{ mySong.title +''+ mySong.artist }}</li>
     </ul>
     </div>
</template>

<script>

export default {
    name: 'page-body',
    props: {
     mySongs: Array
    }
     
}
</script>

<style scoped>

</style>