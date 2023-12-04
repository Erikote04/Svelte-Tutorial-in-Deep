<script>
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
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :global(body) {
        font-family:'Courier New', Courier, monospace;
        font-size: 24px;
    }
</style>