<template>
  <div id="app">
    <router-view/>
  </div>
</template>

// <style lang="scss" scoped>
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

    prevPage() {
      const { baseUrl, part, type, order, maxResults, q, key, prevPageToken, channelId } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}&channelId=${channelId}`;
      this.getData(apiUrl);
    },

    nextPage() {
      const { baseUrl, part, type, order, maxResults, q, key, nextPageToken, channelId } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}&channelId=${channelId}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
        })
        .catch(error => console.log(error));
    }
  }
};

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>
// <script>
// export default {
//   name: "App",
//   components: {
//     Accueil,
//     TheNavigation,
//     SearchForm,
//     SearchResults,
//     Pagination,
//   },
//     data() {
//     return {
//       videos: [],
//       reformattedSearchString: '',
//       api: {
//         baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
//         part: 'snippet',
//         type: 'video',
//         order: 'viewCount',
//         maxResults: 12,
//         q: '',
//         channelId:'UCOipQ939Yy0Ja5GVI4l-lvA',
//         key: 'AIzaSyDjWIVyR4ksdPEOJIw1sdV-WJWKUBTR-Ko' ,
//         prevPageToken: '',
//         nextPageToken: ''
//          },
//     methods: {
//       search(searchParams) {
//         this.reformattedSearchString = searchParams.join(' ');
//         this.api.q = searchParams.join('+');
//         const { baseUrl, part, type, order, maxResults, q, key, channelId} = this.api;
//         const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&channelId=${channelId}`;
//         this.getData(apiUrl);
//         }
//     },
//   }
//     }
// }
// </script>