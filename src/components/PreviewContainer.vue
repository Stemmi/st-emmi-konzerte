<template>
  <section>
    <article v-for="concert in concertData.concerts">
      <ConcertPreview :concert="concert" :location="getLocation(concert.locationId)" />
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
        }
      }
    }
</script>

<style scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: left;
    align-items: center;
  }
</style>