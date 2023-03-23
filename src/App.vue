<template>
  <Header />
  <PreviewContainer />
  <GoogleMaps />
</template>

<script>
  import Header from "./components/Header.vue";
  import PreviewContainer from "./components/PreviewContainer.vue";
  import GoogleMaps from "./components/GoogleMaps.vue";

  export default {
    components: {
      Header,
      PreviewContainer,
      GoogleMaps
    }
  }
</script>

<style scoped>

</style>