<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-content">
                <h3>Neue Band:</h3>
                <NewBandForm @new-band-id="handleNewBandId"/>
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
            "newBandId"
        ],
        props: [
            "show"
        ],
        methods: {
            handleNewBandId(id) {
                this.$emit("newBandId", id);
            },
        }
    } 
</script>

<style scoped>

</style>