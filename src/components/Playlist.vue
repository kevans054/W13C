<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
 <div>
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
 </div>
</template>

<script>
export default {
    name: 'PlayList',

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
           
        }
    }
}
</script>

<style scoped>

</style>