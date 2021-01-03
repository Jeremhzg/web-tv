<template>
  <div class="container">
    <form class="mb-5">
      <div class="input-group">
        <input
          v-model="searchString"
          @keydown.13.prevent="parseSearchString"
          type="text"
          class="form-control"
          placeholder="Rechercher ..."
        >
        <div class="input-group-append">
            <button @click="parseSearchString" size="sm" class=" btn btn-outline-secondary" type="submit">Rechercher</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchString: ''
    };
  },
  methods: {
    parseSearchString() {
      // Trim search string
      const trimmedSearchString = this.searchString.trim();

      if (trimmedSearchString !== '') {
        // Split search string
        const searchParams = trimmedSearchString.split(/\s+/);
        // Emit event
        this.$emit('search', searchParams);
        // Reset input field
        this.searchString = '';
      }
    }
  }
};
</script>

<style scoped>
input,
button {
  box-shadow: none !important;
  margin: 20px;
}

.form-control {
  border-color: #6c757d;
}
</style>