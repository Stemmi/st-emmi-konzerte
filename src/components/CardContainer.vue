<template>

  <section v-if="shows">
    <div class="cards">
    <article v-for="show in shows.results" :key="show.id">
      <PreviewCard :show="show"/>
    </article>
  </div>
  <div v-if="pages>1" class="pages">
    <button v-if="page>1" @click="previousPage">←</button>
    <p>Seite {{ page }} / {{ pages }}</p>
    <button v-if="page<pages" @click="nextPage">→</button>    
  </div>
  </section>
  
  <section v-else class="loading">
    Loading...
  </section>
</template>

<script>
    import PreviewCard from './PreviewCard.vue';
    import api from '../services/api.js';
    import settings from '../services/settings.js';

    export default {
      data() {
        return {
          shows: undefined,
          page: this.$route.query.page || 1,
          pages: undefined
          // test: 0
        }
      },
      components: {
        PreviewCard
      },
      methods: {
        async nextPage() {
          this.page++;
          this.shows = await api.getShows(settings.limit(), this.page);
          this.$router.push({ path: '/', query: { page: +this.page } });
          // window.location = "?page="+this.page;
        },
        async previousPage() {
          this.page--;
          this.shows = await api.getShows(settings.limit(), this.page);
          this.$router.push({ path: '/', query: { page: +this.page } });
        }
      },
      async mounted() {
        this.shows = await api.getShows(settings.limit(), this.page);
        console.log('page', this.page);
        this.pages = this.shows ? Math.ceil(this.shows.count / settings.limit()) : 0;
      },
      async updated() {
        // this.shows = await api.getShows(settings.limit(), this.page);
        console.log('page', this.page);

        // console.log('test++', this.test++);
        
      }
    }
</script>

<style scoped>
  section {
    flex: 49%;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: stretch;
  }

  .pages {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }

  .pages p {
    padding: 10px;
  }

  article {
    width: 320px;
    padding: 10px;
    text-align: center;
  }

</style>