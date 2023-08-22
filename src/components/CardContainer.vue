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
          page: +this.$route.query.page || 1,
          pages: undefined
        }
      },
      components: {
        PreviewCard
      },
      methods: {
        async nextPage() {
          this.page++;
        },
        async previousPage() {
          this.page--;
        }
      },
      watch: {
        async page(newPage, oldPage) {
          this.shows = await api.getShows(settings.limit(), newPage);
          this.$router.push({ path: '/', query: { page: newPage } });
        },
          '$route' (to, from) {
          if (this.page != this.$route.query.page) this.page = +this.$route.query.page || 1;
        }
      },
      async mounted() {
        this.shows = await api.getShows(settings.limit(), this.page);
        this.pages = this.shows ? Math.ceil(this.shows.count / settings.limit()) : 0;
      }
    }
</script>

<style scoped>

  
  article {
    width: 260px;
    max-width: 400px;
    padding: 10px;
    text-align: center;
    flex: auto;
    background: var(--default-brighter-color);
    color: var(--default-dark-color);
    border-radius: 15px;
    box-shadow: 0 0px 10px 0 rgba(100,0,0,0.15);
  }

  article a {
    text-decoration: none;
  }

  article:hover {
    box-shadow: 0 0px 10px 0 rgba(100,0,0,0.3);
    transform: scale(1.02);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
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

</style>