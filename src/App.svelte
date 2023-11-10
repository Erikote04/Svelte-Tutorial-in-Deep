<script>
    import Inner from "./Nested.svelte";
    export let adjective;
    let word = "World";
</script>

<h1>Hello {word}!!!</h1>
<p>Hope you're having a {adjective} day</p>
<Inner adjective="great" />

<style>
    h1 {
        font-size: 3rem;
        text-align: center;
        color: red;
    }

    p {
        font-size: 1.5rem;
        text-align: center;
        color: blue;
    }
</style>