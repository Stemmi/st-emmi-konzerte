<template>
    <header>
        <div>
            <RouterLink to="/">
                <img id=logo src="/images/konzerte-logo-100x100.jpg" alt="Die Band spielt live" />
            </RouterLink>
        </div>

        <h1>St. Emmi<br>Konzerte</h1>

        <div class="mobile">
            <!-- <Navigation v-if="showNav" v-click-anywhere="hideMobileNavMenu" @click="hideMobileNavMenu" /> -->
            <Navigation v-if="showNav" v-click-anywhere="hideMobileNavMenu" />

            <div class="burger">
                <MenuIcon v-if="!showNav" @click="showNav=true"/>
                <!-- <MenuIcon v-else @click="hideMobileNavMenu"/> -->
                <MenuIcon v-else />
            </div>
        </div>
        <div class="widescreen">
            <Navigation />
        </div>


    </header>
</template>

<script>
    import Navigation from "./Navigation.vue";
    import MenuIcon from "./icons/MenuIcon.vue";

    export default {
        data() {
            return {
                showNav: false
            }
        },
        components: {
            Navigation, MenuIcon
        },
        methods: {
            hideMobileNavMenu() {
                this.showNav = false;
            }
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

    .mobile {
        display: block;
    }

    .widescreen {
        display: none;
    }

    @media screen and (min-width: 800px) {
        .mobile {
            display: none;
        }

        .widescreen {
            display: block;
        }
    }

    .burger svg {
        fill: var(--default-dark-color);
        height: 2em;
    }

    .burger svg:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
</style>