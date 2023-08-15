<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-content">
                <h3>Neue Location:</h3>
                <NewLocationForm @new-location-id="handleNewLocationId"/>
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
            "newLocationId"
        ],
        props: [
            "show"
        ],
        methods: {
            handleNewLocationId(id) {
                this.$emit("newLocationId", id);
            },
        }
    } 
</script>

<style scoped>

</style>