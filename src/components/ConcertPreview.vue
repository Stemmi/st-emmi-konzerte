<template>
    <h3>{{ createHeading }}</h3>
    <p>{{ createDate }}</p>
    <img :src="'./images/posters/'+show.poster.filename" :alt="show.poster.alt">
    <p>{{ show.text }}</p>
    <!-- <Author :name="author.name" :imgPath="author.imgPath" /> -->
</template>

<script>
    import Author from "./Author.vue";

    export default {
        data() {
            return {
                author: undefined,
                location: undefined
            }
        },
        components: {
            Author
        },
        props: [
            "show"
        ],
        computed: {
            createHeading() {
                if (this.show?.subtitle && this.location) return this.show?.subtitle + ", " + this.location;
                else return this.show.subtitle || this.location || "";
            },
            createDate() {
                return this.show?.date?.split('-').reverse().join('.');
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