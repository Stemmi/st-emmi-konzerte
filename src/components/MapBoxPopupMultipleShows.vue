<template>
    <h3>{{ createHeading }}</h3>
    <p>{{ createDate }}</p>
    <p>{{ show.text }}</p>
</template>

<script>
    import UserContainer from "./UserContainer.vue";

    export default {
        components: {
            UserContainer
        },
        props: [
            "show", "location", "user"
        ],
        computed: {
            createHeading() {
                const title = this.show.title || "";
                const location = this.location || {};
                let locationString = "";
                if (location.name && location.city) locationString = location.name + ", " + location.city;
                else locationString = location.name || location.city || "";                
                if (title && locationString) return title + ", " + locationString;
                else return title || locationString || "";
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