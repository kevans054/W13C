<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>

    <div id="app">
        <h1>My Song List</h1>
         <page-body 
         :mySongs="mySongs"
        @add="doAddSong" 
        @clear="doClearSong"
   
        
        ></page-body>
        <song-list :mysongCount="songCount"></song-list>
    </div>
</template>

<script>
import PageBody from './components/Pagebody.vue';
import SongList from './components/Songlist.vue'
export default {
    name: 'App',

    data () {
        return {
            mySongs: [
                {
                    title: 'Do They Know Its Christmas',
                    artist: 'Bandaid',
                    genre: 'Christmas',
                },
                {
                    title: 'A Holy Joly Christmas',
                    artist: 'Burl Ives',
                    genre: 'Christmas'
                },
                {
                    title: 'Last Christmas',
                    artist: 'Wham',
                    genre: 'Christmas'
                },
                {
                    title: 'God Rest Ye Merry Gentlemen',
                    artist: 'Pentatonix',
                    genre: 'Christmas'
                },
                {
                    title: 'The Little Drummer Boy',
                    artist: 'Bing Crosby',
                    genre:'Christmas'
                }
                ]
        }
    },

    computed: {
        songCount(songCount) {
            this.mySongs.length;
            return{
                songCount
            }
        }
        },

    clearSongs() {
        return {
            isSiblingClicked: false
        }
    },

    methods: {
        doAddSong(song) {
            this.mySongs.splice(0, 0, song);
            },
        doClearSong() {
            this.mySongs = [];
            }
    },

    components: {
        PageBody,
        SongList
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
