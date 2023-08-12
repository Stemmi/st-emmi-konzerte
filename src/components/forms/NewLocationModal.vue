<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-content">
                <h3>Neue Location:</h3>
                <NewLocationForm @new_location_id="handleNewLocationId"/>
            </div>
        </div>
    </Transition>
</template>

<script>
    import NewLocationForm from './NewLocationForm.vue';

    export default {
        components: {
            NewLocationForm
        },
        emits: [
            "new_location_id"
        ],
        props: [
            "show"
        ],
        methods: {
            handleNewLocationId(id) {
                this.$emit("new_location_id", id);
            },
        }
    } 
</script>

<style scoped>
    .modal-mask {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: black;
        background-color: rgba(0,0,0,0.5);
        overflow: auto;
        transition: opacity 0.3s ease;
    }

    .modal-content {
        background-color: var(--default-brighter-color);
        min-width: 400px;
        max-width: 80%;
        margin: 140px auto;
        padding: 10px;
        color: var(--default-dark-color);
        border: 1px solid var(--default-dark-color);
        border-radius: 15px;
        transition: all 0.3s ease;
    }

    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

</style>