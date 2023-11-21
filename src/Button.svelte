<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    function click() {
        let timestamp = new Date();
        let now = timestamp.toLocaleString();
        dispatch("clicked", {
            date: now
        });
    }   
</script>

<button type="button" on:click={click}>Click me</button>