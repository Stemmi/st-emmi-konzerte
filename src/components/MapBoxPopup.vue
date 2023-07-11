<template>
        <div v-if="shows.length>1">
            <h3>{{ heading }}</h3>
            <ul>
                <li v-for="show of shows" :key="show.id">
                    <RouterLink :to="'/detail/'+show.id">
                        {{ date(show.date) }}
                    </RouterLink>
                    <span v-if="show.title">, {{ show.title }}</span>
                </li>
            </ul>
        </div>
        <div v-else-if="shows.length===1" class="flex">
            <h3>{{ heading }}</h3>
            <RouterLink :to="'/detail/'+shows[0].id">
                {{ date(shows[0].date) }}
            </RouterLink>
            <p>{{ shows[0].text }}</p>
            <UserContainer :user="shows[0].user" />
        </div>
        <div v-else>No shows here.</div>
</template>

<script>
    import UserContainer from "./UserContainer.vue";

    import api from "../services/api.js";
    import formatting from "../services/formatting.js";

    export default {
        data() {
            return {
                shows: []
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
                return formatting.createHeading({title: '', location: this.location});
            }
        },
        methods: {
            date(date) {
                return formatting.createDate(date);
            }
        },
        async mounted() {
            this.shows = await api.getShowsByLocationId(this.location.id);
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