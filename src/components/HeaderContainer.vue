<template>
    <header>
        <div>
            <RouterLink to="/">
                <img src="/images/konzerte-logo-100x100.jpg" alt="Die Band spielt live" />
            </RouterLink>
        </div>
        <h1>St. Emmi<br>Konzerte</h1>
        <Navigation />
    </header>
</template>

<script>
    import Navigation from "./Navigation.vue";

    export default {
        components: {
            Navigation
        }
    }
</script>

<style scoped>

    header {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--default-bright-color);
        color: var(--default-dark-color);
        padding: 10px 20px;
    }

    img {
        border-radius: 50px;
        min-width: 100px;
        height: 100px;
        object-fit: cover;
    }

    h1 {
        flex: 1 1 auto;
    }

</style>