<script>
    import Input from "./lib/Input.svelte";

    let name = "John";
    let firstName = "Doe";
</script>

<main>
    <fieldset>
        <Input bind:value={name} label="Name"/>
        <Input bind:value={firstName} label="Firstname"/>
    </fieldset>
    <p class="label">You are <strong>{name} {firstName}</strong></p>
</main>

<style>
    .label {
        color: blue;
        font-size: 1.3rem;
        text-decoration: underline;
    }
</style>