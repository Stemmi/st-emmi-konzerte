<template>
    <h3>{{ heading }}</h3>
</template>

<script>
    import formatting from "../services/formatting.js";

    export default {
        props: [
            "location"
        ],
        computed: {
            heading() {
                return formatting.createHeading({title: '', location: this.location});
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