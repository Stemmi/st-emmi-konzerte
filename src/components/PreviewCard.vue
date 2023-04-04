<template>
    <h3>{{ createHeading }}</h3>
    <p>{{ createDate }}</p>
    <img v-if="this.show.poster" :src="'./images/posters/'+show.poster.filename" :alt="show.poster.alt">
    <p>{{ show.text }}</p>
    <AuthorContainer :author="author" />
</template>

<script>
    import AuthorContainer from "./AuthorContainer.vue";

    export default {
        components: {
            AuthorContainer
        },
        props: [
            "show", "location", "author"
        ],
        computed: {
            createHeading() {
                const subtitle = this.show.subtitle || "";
                const location = this.location || {};
                let locationString = "";
                if (location.name && location.city) locationString = location.name + ", " + location.city;
                else locationString = location.name || location.city || "";                
                if (subtitle && locationString) return subtitle + ", " + locationString;
                else return subtitle || locationString || "";
            },
            createDate() {
                if (!this.show.date) return "";
                return this.show.date.split('-').reverse().join('.');
            }
        }
    }
</script>

<style scoped>
    img {
        border: 1px solid grey;
        width: 300px;
        min-height: 200px;
        object-fit: cover;
    }

    p {
        margin-bottom: 10px;
    }
</style>