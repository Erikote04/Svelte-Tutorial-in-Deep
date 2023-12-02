<script>
    let userData = {
        name: "Erik",
        firstName: "Sebastián de Erice",
        field: "Frontend",
        salary: {
            min: 18000,
            max: 21000
        }
    }

    function send() {
        alert(JSON.stringify(userData))
    }
</script>

<main>
    <form on:submit|preventDefault={send}>
        <p>
            <label for="name">Name: </label>
            <input type="text" id="name" bind:value={userData.name}>
        </p>
        <p>
            <label for="firstName">First name: </label>
            <input type="text" id="firstName" bind:value={userData.firstName}>
        </p>
        <p>
            <input type="submit" value="Send">
        </p>
    </form>
</main>