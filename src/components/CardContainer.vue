<template>
  <section class="loading" v-if="!shows || !locations || !users">
    Loading...
  </section>
  <section v-else>
    <article v-for="show in shows" :key="show.id">
      <PreviewCard
        :show="show"
        :location="getLocation(show.locationId)"
        :user="getUser(show.userId)"/>
    </article>
  </section>

</template>

<script>
    import PreviewCard from './PreviewCard.vue';
    import dataGetters from '../services/dataGetters.js';

    export default {
      components: {
        PreviewCard
      },
      props: [
        "shows", "locations", "users"
      ],
      methods: {
        getLocation(id) {
          return dataGetters.getLocationById(id, this.locations);
        },
        getUser(id) {
          return dataGetters.getUserById(id, this.users);
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