<template>
    <h3>{{ heading }}</h3>
    <ul>
        <li v-for="show of shows" :key="show.id">
            <span>{{ date(show.date) }}</span>
            <span v-if="show.title">, {{ show.title }}</span>
        </li>
    </ul>
</template>

<script>
    import UserContainer from "./UserContainer.vue";
    import outputFormatters from "../services/outputFormatters.js";

    export default {
        components: {
            UserContainer
        },
        props: [
            "shows", "location", "user"
        ],
        computed: {
            heading() {
                return outputFormatters.createHeading('', this.location);
            }
        },
        methods: {
            date(date) {
                return outputFormatters.createDate(date);
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

    ul {
        list-style-type: none;
    }
</style>