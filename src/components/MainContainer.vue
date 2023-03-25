<template>
    <main>
        <PreviewContainer />
        <GoogleMaps />
    </main>
</template>

<script>
    import PreviewContainer from "./PreviewContainer.vue";
    import GoogleMaps from "./GoogleMaps.vue";
    
    export default {
        components: {
            PreviewContainer,
            GoogleMaps
        }
    } 
</script>

<style scoped>
    main {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
        justify-content: space-between;
        align-items: center;
        margin-top: 2px;
    }
</style>