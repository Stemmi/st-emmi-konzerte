<template>
  <section v-if="shows">
    <article v-for="show in shows" :key="show.id">
      <PreviewCard :show="show"/>
    </article>
  </section>
  
  <section v-else class="loading">
    Loading...
  </section>

</template>

<script>
    import PreviewCard from './PreviewCard.vue';
    import dataGetters from '../services/dataGetters.js';

    export default {
      data() {
        return {
          shows: undefined
        }
      },
      
      components: {
        PreviewCard
      },
      async mounted() {
            this.shows = await dataGetters.getShows();
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