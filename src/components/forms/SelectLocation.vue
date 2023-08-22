<template>
    <NewLocationModal :show="locationId===-1" @new-location-id="setNewLocationId" />

    <label for="locId">Location:</label>
    
    <select v-if="locations" id="locId" name="locId" required :value="locationId" @input="selectLocation" >
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
                originalLocationId: this.locationId
            }
        },
        components: {
            NewLocationModal
        },
        emits: [
            "updateLocation"
        ],
        props: [
            "locationId"
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