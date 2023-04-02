<template>
  <section v-if="shows && locations && authors">
    <article v-for="show in shows">
      <ConcertPreview :show="show" :location="getLocation(show.locationId)" :author="getAuthor(show.authorId)"/>
    </article>
  </section>

</template>

<script>
    import ConcertPreview from './ConcertPreview.vue';

    export default {
      data() {
        return {
          locations: undefined,
          authors: undefined
        }
      },
      
      components: {
        ConcertPreview
      },
      props: [
        "shows"
      ],
      methods: {
        getLocation(id) {
          if (!this.locations) return undefined;
          const filtered = this.locations.filter(loc => loc.id === id);
          if (!filtered.length) return undefined;
          return filtered[0];
        },
        getAuthor(id) {
          if (!this.authors) return undefined;
          const filtered = this.authors.filter(aut => aut.id === id);
          if (!filtered.length) return undefined;
          return filtered[0];
        }
      },
      async mounted() {
            const locationsResponse = await fetch("./data/locations.json");
            const locationsResult = await locationsResponse.json();
            this.locations = locationsResult.locations;
            const authorsResponse = await fetch("./data/authors.json");
            const authorsResult = await authorsResponse.json();
            this.authors = authorsResult.authors;
        }
    }
</script>

<style scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    flex: 49%;
    gap: 10px;
    justify-content: left;
    padding: 10px 10px;
  }

  article {
    width: 320px;
    padding: 10px;
    text-align: center;
  }

</style>