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
            "isDeleteConfirmed"
        ],
        props: [
            "show"
        ],
        methods: {
            confirmDelete() {
                this.$emit("isDeleteConfirmed", true);
            },
            cancelDelete() {
                this.$emit("isDeleteConfirmed", false);
            }
        }
    } 
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }
</style>