<template>
  <div id="app">
    <TheNavigation />
    <Accueil />
    <SearchForm v-on:search="search"/>
    <SearchResults
      v-if="videos.length > 0"
      v-bind:videos="videos"
      v-bind:reformattedSearchString="reformattedSearchString"
    />
    <Pagination
      v-if="videos.length > 0"
      v-bind:prevPageToken="api.prevPageToken"
      v-bind:nextPageToken="api.nextPageToken"
      v-on:prev-page="prevPage"
      v-on:next-page="nextPage"
    />
  </div>
</template>
<script>
import Accueil from "../components/Accueil";
import TheNavigation from "../components/layout/TheNavigation";
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';

export default {
  name: "App",
  components: {
    Accueil,
    TheNavigation,
    SearchForm,
    SearchResults,
    Pagination,
  },
    data() {
    return {
      videos: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 12,
        channelId:'UCOipQ939Yy0Ja5GVI4l-lvA',
        q: '',
        key: 'AIzaSyDjWIVyR4ksdPEOJIw1sdV-WJWKUBTR-Ko' ,
        prevPageToken: '',
        nextPageToken: ''
         }
       }

    },
methods: {
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(' ');
      this.api.q = searchParams.join('+');
      const { baseUrl, part, type, order, maxResults, q, key, channelId } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&channelId=${channelId}`;
      this.getData(apiUrl);
    },

    prevPage() {
      const { baseUrl, part, type, order, maxResults, q, key, prevPageToken } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`;
      this.getData(apiUrl);
    },

    nextPage() {
      const { baseUrl, part, type, order, maxResults, q, key, nextPageToken } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      this.$axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
        })
        .catch(error => console.log(error));
    },
    playVideo() {
      this.player.playVideo()
    },
     playing() {
      console.log('On regarde la vidéo !')
    },
    computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
  }
};

</script>

<style lang="scss" scoped>


#app {
  background-color: white;

}
#movie_player > div.ytp-cued-thumbnail-overlay > div{
  width: 200px;
}
</style>
