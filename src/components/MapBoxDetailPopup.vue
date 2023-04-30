<template>
    <h3>{{ heading }}</h3>
</template>

<script>
    import UserContainer from "./UserContainer.vue";

    import outputFormatters from "../services/outputFormatters.js";

    export default {
        props: [
            "location"
        ],
        computed: {
            heading() {
                return outputFormatters.createHeading({title: '', location: this.location});
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