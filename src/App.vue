<template>
  <HeaderContainer />
  <PreviewContainer />
  <GoogleMaps />
</template>

<script>
  import HeaderContainer from "./components/HeaderContainer.vue";
  import PreviewContainer from "./components/PreviewContainer.vue";
  import GoogleMaps from "./components/GoogleMaps.vue";

  export default {
    components: {
      HeaderContainer,
      PreviewContainer,
      GoogleMaps
    }
  }
</script>

<style scoped>

</style>