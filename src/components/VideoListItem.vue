<template>
  <div style="width:1000px; height:400px">
    <div class="card-body">
      <h5 class="card-title">
  <youtube :video-id="videoId" ref="youtube" @playing="playing">
        <button @click="playVideo"><img class="card-img-top" :src="video.snippet.thumbnails.medium.url" alt="YouTube thumbnail"></button>
      </youtube>
      </h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
      <p class="card-text">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video']
};
</script>