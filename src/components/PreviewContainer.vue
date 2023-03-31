<template>
  <section>
    <article v-for="concert in concertData?.concerts">
      <ConcertPreview :concert="concert" :location="getLocation(concert.locationId)" :author="getAuthor(concert.authorId)" />
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
        "concertData"
      ],
      methods: {
        getLocation(id) {
          const location = this.concertData.locations[id];
          if (location.name && location.city) return location.name + ", " + location.city;
          else return location.name || location.city || "";
        },
        getAuthor(id) {
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