<template>
    <main>
        <PreviewContainer :concertData="concertData" />
        <MapBox />
    </main>
</template>

<script>
    import PreviewContainer from "./PreviewContainer.vue";
    import MapBox from "./MapBox.vue";
    
    export default {
        components: {
            PreviewContainer,
            MapBox
        },
        props: [
            "concertData"
        ]
    } 
</script>

<style scoped>
    main {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 2px;
        justify-content: space-between;
        margin-top: 2px;
    }
</style>