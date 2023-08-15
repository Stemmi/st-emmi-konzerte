<template>
    <RouterLink :to="'/detail/'+show.id"> 
        <div class="card">
            <h3>{{ heading }}</h3>
            <p>{{ date }}</p>
            <img v-if="this.show.poster" :src="image" :alt="show.poster.alt">
            <p v-for="paragraph of paragraphs">{{ paragraph }}</p>
            <UserContainer :user="show.user" />
        </div>
    </RouterLink>
</template>

<script>
    import UserContainer from "./UserContainer.vue";
    import formatting from "../services/formatting.js";
    import settings from '../services/settings.js';

    export default {
        data() {
            return {
                isImgLoaded: false,
                posterUrl: settings.imgUrl() + "/posters/"
            }
        },
        components: {
            UserContainer
        },
        props: [
            "show"
        ],
        computed: {
            heading() {
                return formatting.createHeading(this.show);
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
                return '/images/poster-placeholder.jpg';
            }
        }
    }
</script>

<style scoped>
    img {
        /* border: 1px solid grey; */
        min-width: 200px;
        max-width: 90%;
        min-height: 150px;
        max-height: 300px;
        object-fit:contain;
        background: var(--default-brighter-color);
    }

    p {
        margin-bottom: 10px;
    }
</style>