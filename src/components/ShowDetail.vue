<template>

  <section v-if="show">
    <button><RouterLink to="/"><Back />Zurück zur Liste</RouterLink></button>
    <h2>{{ show.title }}</h2>
    <h3><Location />{{ '' + heading }}</h3>
    <p><Calendar />{{ date }}</p>
    <div class="blog-content">
      <img v-if="this.show.poster" :src="image" :alt="show.poster.alt">
      <p>{{ show.text }}</p>
    </div>
    <UserContainer :user="show.user" />
  </section>
  
  <section v-else class="loading">
    Loading...
  </section>

</template>

<script>
    import Location from './icons/Location.vue';
    import Calendar from './icons/Calendar.vue';
    import Back from './icons/Back.vue';

    import outputFormatters from '../services/outputFormatters.js';

    export default {      
      components: {
        Location,
        Calendar,
        Back
      },
      props: [
        "show"
      ],
      computed: {
            heading() {
                return outputFormatters.createHeading({ location: this.show.location });
            },
            date() {
                return outputFormatters.createDate(this.show.date);
            },
            image() {
                if (this.show.poster.filename) return '/images/posters/'+this.show.poster.filename;
                return '/images/posters/placeholder.jpg';
            }
        }
    }
</script>

<style scoped>
  section {
    width: 320px;
    padding: 10px;
    flex: 49%;
    /* text-align: center; */
  }

  img {
    margin-inline-start: 10px 0;
    
  }


  img {
        border: 1px solid grey;
        min-height: 200px;
        min-width: 200px;
        object-fit: contain;
    }

  .blog-content {
    margin-top: 15px;
    display: flex;
    gap: 20px;
    flex-wrap:wrap;
  }
</style>