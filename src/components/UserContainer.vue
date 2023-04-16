<template>
    <div v-if="user">
        <img :src="'/images/users/'+this.user.image" :alt="user.name">
        <p>{{ user.name }}</p>
    </div>
</template>

<script>
    import dataGetters from '../services/dataGetters.js';
    
    export default {
        data() {
            return {
                user: undefined            }
        },
        props: [
            "userId"
        ],
        async mounted() {
            this.user = await dataGetters.getUserById(this.userId);
        }
    }

</script>

<style scoped>
    div {
        font-size: 0.8rem;
        margin-top: 20px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    img {
        border-radius: 50%;
        border: 1px solid grey;
        min-width: 30px;
        height: 30px;
        object-fit: cover;
    }
</style>