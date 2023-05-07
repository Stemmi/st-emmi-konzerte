<template>
    <main>
    <section>
    
    <h3>Neuer Eintrag:</h3>
    <form @submit="loadHome" :action="apiUrl+'/shows'" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="title">Titel (optional):</label><br>
        <input type="text" id="title" name="title" maxlength="255" size="40"><br><br>
        
        <label for="location_id">Location:</label><br>
        <select v-model="location_id" v-if="locations" id="location_id" name="location_id" required>
            <option v-for="location of locations" :value="location.id">{{ [location.name, location.city].filter(item => item).join(', ') }}</option>
            <!-- <option value="-1">+++ Neue Location +++</option> -->
        </select><br><br>

        <div v-if="location_id==='-1'">
            <br>
        </div>


        <label for="date">Datum:</label><br>
        <input type="date" id="date" name="date" size="10" required><br><br>
        
        <label for="text">Beschreibung:</label><br>
        <textarea id="text" name="text" maxlength="255" rows="4" cols="80"></textarea><br><br>
        
        <label for="poster_filename">Plakat-Foto:</label><br>
        <input type="text" id="poster_filename" name="poster_filename" maxlength="255" size="40"><br><br>
        
        <label for="poster_alt">Plakat-Text:</label><br>
        <input type="text" id="poster_alt" name="poster_alt" maxlength="255" size="40"><br><br>

        <input type="hidden" name="user_id" value="1">
        
        <button type="submit">OK</button>

    </form>
    
    </section>
    </main>
</template>

<script>
    import settings from '../services/settings.js';
    import api from '../services/api.js';

    export default {
        data() {
            return {
                apiUrl: settings.apiUrl(),

                locations: undefined,
                location_id: undefined
            }
        },
        methods: {
            loadHome() {
                // this.$router.push({ path: '/' });
                console.log('home');
            }
        },
        async mounted() {            
            this.locations = await api.getLocations();
        }
    } 
</script>

<style scoped>

</style>