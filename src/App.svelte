<script>
    import Input from "./lib/Input.svelte";
    
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
        <Input
            identifier = "name"
            formField = "Name"
            bind:value = {userData.name}
        />
        <Input
            identifier = "firstName"
            formField = "First name"
            bind:value = {userData.firstName}
        />
        <p>
            <input type="submit" value="Send">
        </p>
    </form>
</main>