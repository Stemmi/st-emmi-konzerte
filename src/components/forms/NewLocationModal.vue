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

</style>