<template>

    <h3>{{ createHeading }}</h3>
    <p>{{ createDate }}</p>
    <img :src="'./images/posters/'+concert.poster.filename" :alt="concert.poster.alt" :width="concert.poster.width" :heigth="concert.poster.height">
    <p>{{ concert.text }}</p>
    <Author :name="author.name" :imgPath="author.imgPath" />
</template>

<script>
    import Author from "./Author.vue";

    export default {
        components: {
            Author
        },
        props: [
            "concert",
            "location",
            "author"
        ],
        computed: {
            createHeading() {
                if (this.concert.subtitle && this.location) return this.concert.subtitle + ", " + this.location;
                else return this.concert.subtitle || this.location || "";
            },
            createDate() {
                return this.concert.date.split('-').reverse().join('.');
            }
        }
    }
</script>

<style scoped>
    img {
        border: 1px solid grey;
    }

    p {
        margin-bottom: 10px;
    }
</style>