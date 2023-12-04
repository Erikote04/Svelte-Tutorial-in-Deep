<script>
    import "./assets/global.css";
    import "normalize.css/normalize.css";
    import Svelte from "./assets/svelte.svg";
    import Input from "./lib/Input.svelte";

    let name = "John";
    let firstName = "Doe";
</script>

<main>
    <Input label="Name" bind:value={name} />
    <Input label="Firstname" bind:value={firstName} />
    <p class="label">Your name is {name} {firstName}</p>

    <p>{Svelte}</p> <!--The variable contains the path-->
    <img src={Svelte} alt="Svelte logo">
</main>

<style>

</style>