<template>
    <nav>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        
        <button @click="loadNew"><PlusIcon />Neuer Eintrag</button>
        <button class="userButton"><UserIcon />Login</button>
    </nav>
</template>

<script>
    import UserIcon from "./icons/UserSolid.vue";
    import PlusIcon from "./icons/CirclePlusSolid.vue";

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
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
    }

    a {
        font-size: 1.1rem;
    }

    .userButton {
        text-decoration: line-through;
    }

</style>