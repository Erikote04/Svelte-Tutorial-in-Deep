<script>
    import Input from "./lib/Input.svelte";

    let name = "John";
    let firstName = "Doe";
    let completeName = name + " " + firstName; // This statement is executed only once, so it will not have changes even if the variables that compose it change.
</script>

<main>
    <Input label="Name" bind:value={name} />
    <Input label="Firstname" bind:value={firstName} />
    <p class="label">Your name is {completeName}</p>
</main>

<style>

</style>