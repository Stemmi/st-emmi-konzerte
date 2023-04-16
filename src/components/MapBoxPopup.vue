<template>
    <div v-if="shows">
        <h3>{{ heading }}</h3>
        <ul v-if="shows.length>1">
            <li v-for="show of shows" :key="show.id">
                <span>{{ date(show.date) }}</span>
                <span v-if="show.title">, {{ show.title }}</span>
            </li>
        </ul>
        <div v-else>
            <p>{{ date(shows[0].date) }}</p>
            <p>{{ shows[0].text }}</p>
            <UserContainer :userId="shows[0].userId" />
        </div>
        
    </div>

</template>

<script>
    import UserContainer from "./UserContainer.vue";
    import dataGetters from "../services/dataGetters.js";
    import outputFormatters from "../services/outputFormatters.js";

    export default {
        data() {
            return {
                shows: undefined
            }
        }, 
        components: {
            UserContainer
        },
        props: [
            "location"
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
        },
        async mounted() {
            this.shows = await dataGetters.getShowsByLocation(this.location.id);
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