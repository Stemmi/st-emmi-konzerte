<template>
    <h3>{{ heading }}</h3>
    <p>{{ date }}</p>
    <img v-if="this.show.poster" :src="'./images/posters/'+show.poster.filename" :alt="show.poster.alt">
    <p>{{ show.text }}</p>
    <UserContainer :user="user" />
</template>

<script>
    import UserContainer from "./UserContainer.vue";
    import outputFormatters from "../services/outputFormatters.js";

    export default {
        components: {
            UserContainer
        },
        props: [
            "show", "location", "user"
        ],
        computed: {
            heading() {
                return outputFormatters.createHeading(this.show, this.location);
            },
            date() {
                return outputFormatters.createDate(this.show.date);
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