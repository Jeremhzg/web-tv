<template>
  <div class="container">
    <nav>
      <ul class="pagination justify-content-end">
        <li class="page-item" v-bind:class="{ disabled: prevPageToken === undefined }">
          <a @click="prevPage" class="page-link" href="#">Précédent</a>
        </li>
        <li class="page-item" v-bind:class="{ disabled: nextPageToken === undefined }">
          <a @click="nextPage" class="page-link" href="#">Suivant</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['prevPageToken', 'nextPageToken'],
  methods: {
    prevPage() {
      this.$emit('prev-page');
    },
    nextPage() {
      this.$emit('next-page');
    }
  }
};
</script>

<style scoped>
.page-link {
  box-shadow: none !important;
}
</style>
