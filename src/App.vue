<template>
  <HeaderContainer/>
  <MainContainer :concertData="concertData" />
</template>

<script>
  import HeaderContainer from "./components/HeaderContainer.vue";
  import MainContainer from "./components/MainContainer.vue";
  import concertData from "./assets/concert-data.json"

  export default {
    data() {
      return {
        concertData: concertData
      };
    },
    components: {
      HeaderContainer,
      MainContainer
    }
  }
</script>

<style scoped>

</style>