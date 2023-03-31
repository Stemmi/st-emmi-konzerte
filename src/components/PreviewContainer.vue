<template>
  <section v-if="shows">
    <article v-for="show in shows?.shows">
      <ConcertPreview :show="show" />
    </article>
  </section>

</template>

<script>
    import ConcertPreview from './ConcertPreview.vue';

    export default {
      components: {
        ConcertPreview
      },
      props: [
        "shows"
      ],
      methods: {
        getLocation(id) {
          return undefined;
          const location = this.concertData.locations[id];
          if (location.name && location.city) return location.name + ", " + location.city;
          else return location.name || location.city || "";
        },
        getAuthor(id) {
          return undefined;
          const author = this.concertData.authors[id];
          return {
            name: author.name,
            imgPath: './images/authors/' + author.image
          };
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