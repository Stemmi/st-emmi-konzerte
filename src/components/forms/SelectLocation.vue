<template>
    <NewLocationModal :show="location_id===-1" @new_location_id="setNewLocationId" />

    <label for="loc_id">Location:</label>
    
    <select v-if="locations" id="loc_id" name="loc_id" required :value="location_id" @input="selectLocation" >
        <option v-for="location of locations" :key="location.id" :value="location.id">{{ [ location.city, location.name ].filter(item => item).join(', ') }}</option>
        <option value="-1">+++ Neue Location +++</option>
    </select>
</template>

<script>
    import NewLocationModal from './NewLocationModal.vue';
    import api from '../../services/api.js';

    export default {
        data() {
            return {
                locations: undefined,
                show: false,
                originalLocationId: this.location_id
            }
        },
        components: {
            NewLocationModal
        },
        emits: [
            "updateLocation"
        ],
        props: [
            "location_id"
        ],
        methods: {
            selectLocation(event) {
                this.$emit("updateLocation", event.target.value);
            },
            async setNewLocationId(id) {
                const updatedId = id ? id : this.originalLocationId;
                this.locations = await api.getLocations();
                this.$emit("updateLocation", updatedId);
            }
        },
        async mounted() {            
            this.locations = await api.getLocations();
        }
    } 
</script>

<style scoped>
</style>