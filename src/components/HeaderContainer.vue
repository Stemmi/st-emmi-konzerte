<template>
    <header>
        <div>
            <RouterLink to="/">
                <img id=logo src="/images/konzerte-logo-100x100.jpg" alt="Die Band spielt live" />
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

    #logo {
        box-shadow: 0 0px 10px 0 rgba(100,0,0,0.3);
    }

    #logo:hover {
        transform: scale(1.02);
    }

</style>