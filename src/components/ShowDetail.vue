<template>

  <section v-if="show">
    <button @click="$router.back()"><BackIcon />Zurück zur Liste</button>
    <h2>{{ show.title }}</h2>
    <h3><LocationIcon />{{ '' + heading }}</h3>
    <p><CalendarIcon />{{ date }}</p>

    <div class="blog-content">
      <div>
        <img v-if="this.show.poster" :src="image" :alt="show.poster.alt">
        <p v-for="paragraph of paragraphs">{{ paragraph }}</p>
      </div>
      <br>
      <div class="bands" v-if="bands.length">
        <span v-for="(band, index) in bands" :key="band.id">
          <span v-if="index===0">Mit <a :href="band.url" target="_blank">{{ band.name }}</a></span>
          <span v-else>, <a :href="band.url" target="_blank">{{ band.name }}</a></span> 
        </span>
      </div>
      <div class="location-link">
        <p><a :href="show.location.url" target="_blank">{{ show.location.url }}</a></p>
      </div>
    </div>
    <div class="clear"></div>
    <UserContainer :user="show.user" />
    <button @click="$router.push('/edit/'+show.id)">Edit</button>
    
  </section>
  
  <section v-else class="loading">
    Loading...
  </section>

</template>

<script>
    import LocationIcon from './icons/LocationIcon.vue';
    import CalendarIcon from './icons/CalendarIcon.vue';
    import BackIcon from './icons/BackIcon.vue';
    import UserContainer from "../components/UserContainer.vue";

    import formatting from '../services/formatting.js';
    import settings from '../services/settings.js';

    export default {      
      components: {
        LocationIcon,
        CalendarIcon,
        BackIcon,
        UserContainer
      },
      data() {
          return {
            posterUrl: settings.imgUrl() + "/posters/"
          }
        },
      props: [
        "show", "bands"
      ],
      computed: {
            heading() {
                return formatting.createHeading({ location: this.show.location });
            },
            date() {
                return formatting.createDate(this.show.date);
            },
            paragraphs() {
                if (!this.show.text) return [];
                return this.show.text.split('\n');
            },
            image() {
                if (this.show.poster.filename) return this.posterUrl+this.show.poster.filename;
                return '/images/poster_placeholder.jpg';
            }
        }
    }
</script>

<style scoped>
  section {
    width: 320px;
    flex: 49%;
  }

  img {
    border: 1px solid grey;
    float: left;
    margin-right: 15px;
    min-height: 200px;
    min-width: 200px;
    max-width: 100%;
    object-fit: contain;
  }
  
  .blog-content {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .bands {
    font-style: italic;
    margin-bottom: 15px;
  }
</style>