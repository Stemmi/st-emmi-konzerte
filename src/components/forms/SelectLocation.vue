<template>
    <label for="loc_id">Location:</label>
    
    <select v-if="locations" id="loc_id" name="loc_id" required :value="location_id" @input="selectLocation" >
        <option v-for="location of locations" :key="location.id" :value="location.id">{{ [ location.city, location.name ].filter(item => item).join(', ') }}</option>
        <option value="-1">+++ Neue Location +++</option>
    </select>

    <NewLocationForm v-if="location_id===-1" @new_location_id="setNewLocationId"/>       
</template>

<script>
    import NewLocationForm from './NewLocationForm.vue';
    import api from '../../services/api.js';


    export default {
        data() {
            return {
                locations: undefined
            }
        },
        components: {
            NewLocationForm
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
                this.locations = await api.getLocations();
                this.$emit("updateLocation", id);
            }
        },
        async mounted() {            
            this.locations = await api.getLocations();
        }
    } 
</script>

<style scoped>
</style>