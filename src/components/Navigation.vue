<template>
    <nav>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
        
        <button><PlusIcon />Neuer Eintrag</button>
        <button><UserIcon />Login</button>
    </nav>
</template>

<script>
    import UserIcon from "./icons/UserSolid.vue";
    import PlusIcon from "./icons/CirclePlusSolid.vue";

    export default {
        components: {
            UserIcon,
            PlusIcon
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

    button {
        font-size: 0.9rem;
    }

    button {
        text-decoration: line-through;
    }

</style>