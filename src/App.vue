<template>
  <HeaderContainer/>
  <MainContainer :concertData="concertData" />
</template>

<script>
  import HeaderContainer from "./components/HeaderContainer.vue";
  import MainContainer from "./components/MainContainer.vue";

  // const concertData = await fetch("./concert-data.json").then(response => { return response.json(); });
  // is this a good way? I forgot everything... :-)

  export default {
    data() {
      return {
        concertData: undefined
      };
    },
    components: {
      HeaderContainer,
      MainContainer
    },
    async mounted() {
      const response = await fetch("./concert-data.json");
      const result = await response.json();
      this.concertData = result;
    }
  }
</script>