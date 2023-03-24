<template>
    <header>
        <div><img src="/images/konzerte-logo-100x100.jpg" alt="Die Band spielt live"></div>
        <h1>St. Emmi<br>Konzerte</h1>
        <nav>
            <a href="/kontakt">Kontakt</a>
            <a href="/new">Neuer Eintrag</a>
            <a href="/login">Login</a>
        </nav>

    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    header {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--default-bright-color);
        color: var(--default-dark-color);
        margin-top: 40px;
        padding: 10px 20px;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
    }

    img {
        border-radius: 10px;
    }

    h1 {
        flex: 1 1 auto;
    }

    a, p {
        font-size: 1.2rem;
        text-decoration: line-through;
    }
</style>