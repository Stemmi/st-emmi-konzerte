<template>
  <HeaderContainer />
  <RouterView />
</template>

<script>
  import HeaderContainer from "./components/HeaderContainer.vue";

  export default {
    components: {
      HeaderContainer
    }
  }
</script>