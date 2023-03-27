<template>

    <h3>{{ createHeading }}</h3>
    <p>{{ createDate }}</p>
    <img :src="'./images/posters/'+concert.poster.filename" :alt="concert.poster.alt" :width="concert.poster.width" :heigth="concert.poster.height">
    <p>{{ concert.text }}</p>
</template>

<script>
    export default {
        props: [
            "concert",
            "location"
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
        margin-top: 10px;
        border: 1px solid grey;
    }
</style>