<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-content">
                <h3>Neue Band:</h3>
                <NewBandForm @new_band_id="handleNewBandId"/>
            </div>
        </div>
    </Transition>
</template>

<script>
    import NewBandForm from './NewBandForm.vue';

    export default {
        components: {
            NewBandForm
        },
        emits: [
            "new_band_id"
        ],
        props: [
            "show"
        ],
        methods: {
            handleNewBandId(id) {
                this.$emit("new_band_id", id);
            },
        }
    } 
</script>

<style scoped>

</style>