<template>
    <h3>{{ heading }}</h3>
    <p>{{ date }}</p>
    <img v-if="this.show.poster" :src="image" :alt="show.poster.alt">
    <p>{{ show.text }}</p>
    <UserContainer :userId="show.userId" />
</template>

<script>
    import UserContainer from "./UserContainer.vue";
    import outputFormatters from "../services/outputFormatters.js";
    import dataGetters from "../services/dataGetters";

    export default {
        data() {
            return {
                location: undefined            }
        },
        components: {
            UserContainer
        },
        props: [
            "show"
        ],
        computed: {
            heading() {
                return outputFormatters.createHeading(this.show, this.location);
            },
            date() {
                return outputFormatters.createDate(this.show.date);
            },
            image() {
                if (this.show.poster.filename) return './images/posters/'+this.show.poster.filename;
                return './images/posters/placeholder.jpg';
            }
        },
        async mounted() {
            this.location = await dataGetters.getLocationById(this.show.locationId);
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