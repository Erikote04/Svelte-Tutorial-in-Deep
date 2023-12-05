<script>
    import Input from "./lib/Input.svelte";

    let name = "John";
    let firstName = "Doe";
    let completeName; 
    $: {
        completeName = name + " " + firstName;
    }
    // $ is used to make reactive blocks. Now every time that any of the variables changes, as the variable changes completely, the reactive block will be re-evaluated 
</script>

<main>
    <Input label="Name" bind:value={name} />
    <Input label="Firstname" bind:value={firstName} />
    <p class="label">Your name is {completeName}</p>
</main>

<style>

</style>