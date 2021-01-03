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

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #091018;

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