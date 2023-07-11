<template>
    <main>
        <section>
            <h2>About</h2>
            <p>This project was programmed by me, Christian Stemmann, as part of the tailored training I did at the Hamburg Coding School.</p>
            <p>It is based on the idea of the final project of the HCS Full Stack Web Development course. It was originally meant to be a travel blog, but since I play in a band I decided to change it up a bit while keeping the technical requirements.</p>
            <p>The frontend is built with Vue and uses the Mapbox API. The backend uses node.js/Express and a MySQL database.</p>
            <p>I hope you enjoy it!</p>
        </section>
        <section>
            <h2>Me</h2>
            <p>Feel free to contact me:</p>
            <p>
                Christian Stemmann<br />
                <a href="mailto:cs@studiostemmi.de">cs@studiostemmi.de</a> 
            </p>
            <br />
            <h2>The School</h2>
            <p>
                HCS Hamburg Coding School GmbH<br />
                Gasstraße 4<br />
                22761 Hamburg<br />
                +49 40 22863615<br />
                <a href="https://hamburgcodingschool.com/" target="_blank">hamburgcodingschool.com</a><br />
            </p>
        </section>
        
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  section {
    flex: 49%;
  }

  p {
    font-size: 1.2em;
    padding-bottom: 10px;
  }

</style>