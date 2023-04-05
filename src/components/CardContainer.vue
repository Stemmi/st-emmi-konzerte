<template>
  <section class="loading" v-if="!shows || !locations || !authors">
    Loading...
  </section>
  <section v-else>
    <article v-for="show in shows" :key="show.id">
      <PreviewCard :show="show" :location="getLocation(show.locationId)" :author="getAuthor(show.authorId)"/>
    </article>
  </section>

</template>

<script>
    import PreviewCard from './PreviewCard.vue';

    export default {
      components: {
        PreviewCard
      },
      props: [
        "shows", "locations", "authors"
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