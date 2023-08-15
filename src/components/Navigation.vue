<template>
    <nav>
        <RouterLink to="/kontakt" >Kontakt</RouterLink>
        
        <button @click="loadNew"><PlusIcon />Neuer Eintrag</button>
        <button class="userButton"><UserIcon />Login</button>
    </nav>

</template>

<script>
    import UserIcon from "./icons/UserIcon.vue";
    import PlusIcon from "./icons/PlusIcon.vue";

    export default {
        components: {
            UserIcon,
            PlusIcon
        },
        methods: {
            loadNew() {
                this.$router.push({ path: '/neu' });
            }
        }
    }
</script>

<style scoped>
    nav {
        background-color: var(--default-dark-color);
        color: var(--default-bright-color);
        flex-direction: column;
        padding: 20px;
        z-index: 1;
        opacity: 0.95;
        border-radius: 15px;
        box-shadow: 0 0px 10px 0 rgba(255,255,255,0.5);
        transform: scale(1.2);
        position: absolute;
        top: 110px;
        right: 25px;
        
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
        align-items: flex-end;
    }

    nav a {
        color: var(--default-brighter-color);
    }

    @media screen and (min-width: 800px) {
        nav {
            background-color: var(--default-bright-color);
            color: var(--default-dark-color);
            padding: 0px;
            box-shadow: none;
            align-items: center;
            flex-direction: row;
            transform: scale(1);
            position: static;
            opacity: 1;
        }
        nav a {
           color: var(--default-dark-color);
        }
    }

    a {
        font-size: 1.1rem;
    }

    .userButton {
        text-decoration: line-through;
    }
</style>