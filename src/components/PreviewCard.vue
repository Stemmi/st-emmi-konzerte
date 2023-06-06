<template>
    <a :href="'/detail/'+show.id">
    <h3>{{ heading }}</h3>
    <p>{{ date }}</p>
    <img v-if="this.show.poster" :src="image" :alt="show.poster.alt">
    </a>
    <p>{{ show.text }}</p>
    <UserContainer :user="show.user" />
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
            image() {
                if (this.show.poster.filename) return this.posterUrl+this.show.poster.filename;
                return '/images/poster_placeholder.jpg';
            }
        }
    }
</script>

<style scoped>
    img {
        border: 1px solid grey;
        max-width: 300px;
        min-height: 200px;
        max-height: 300px;
        object-fit:contain;
        background: var(--default-bright-color);
    }

    p {
        margin-bottom: 10px;
    }
</style>