<template>
    <div v-if="author">
        <img :src="createImgPath" :alt="author.name">
        <p>{{ author.name }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: undefined
            }
        },
        props: [
            "author"
        ],
        computed: {
            createImgPath() {
                return this.imgPath = '/images/authors/' + this.author.image;
            }
        }
    }

</script>

<style scoped>
    div {
        font-size: 0.8rem;
        margin-top: 20px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    img {
        border-radius: 50%;
        border: 1px solid grey;
        min-width: 30px;
        height: 30px;
        object-fit: cover;
    }
</style>