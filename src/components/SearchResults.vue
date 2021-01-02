<template>
  <div class="container mb-3">
    <div class="d-flex mb-3">
      <div class="mr-auto">
        <h3>Résultat pour |  {{ reformattedSearchString }}</h3>
      </div>

    </div>

    <div class="card-columns" v-if="displayMode === 'grid'">
      <div class="card" v-bind:key="video.id.videoId" v-for="video in videos">
        <VideoGridItem v-bind:video="video"/>
      </div>
    </div>
    <div v-else>
      <div class="card mb-2" v-bind:key="video.id.videoId" v-for="video in videos">
        <VideoListItem v-bind:video="video"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem';
import VideoGridItem from './VideoGridItem';

export default {
  name: 'SearchResults',
  components: {
    VideoListItem,
    VideoGridItem
  },
  data() {
    return {
      title: 'Search Results',
      displayMode: 'grid'
    };
  },
  methods: {
    changeDisplayMode(displayMode) {
      this.displayMode = displayMode;
    }
  },
  props: ['videos', 'reformattedSearchString']
};
</script>

<style scoped>
button:focus {
  box-shadow: none !important;
}
</style>