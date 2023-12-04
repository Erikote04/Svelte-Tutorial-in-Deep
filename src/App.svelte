<script>
    import "./assets/global.css";
    import "normalize.css/normalize.css";
    import Input from "./lib/Input.svelte";

    let name = "John";
    let firstName = "Doe";
</script>

<main>
    <Input label="Name" bind:value={name} />
    <Input label="Firstname" bind:value={firstName} />

    <p class="label">Your name is {name} {firstName}</p>
</main>

<style>

</style>