<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-content">
                <h3>Soll diese Show wirklich gelöscht werden?</h3>
                <div class="form-button-container">
                    <button @click="confirmDelete">⚠️ OK</button>
                    <button @click="cancelDelete">Abbrechen</button>
                </div>

            </div>
        </div>
    </Transition>
</template>

<script>
    export default {

        emits: [
            "is-delete-confirmed"
        ],
        props: [
            "show"
        ],
        methods: {
            confirmDelete() {
                this.$emit("is-delete-confirmed", true);
            },
            cancelDelete() {
                this.$emit("is-delete-confirmed", false);
            }
        }
    } 
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
</style>