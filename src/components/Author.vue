<template>
    <div>
        <img :src="imgPath" :alt="name" width="20" height="20">
        <p>{{ name }}</p>
    </div>
</template>

<script>
    export default {
        props: [
            "name",
            "imgPath"
        ]
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
    }
</style>