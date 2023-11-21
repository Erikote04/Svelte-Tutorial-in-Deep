<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    function click() {
        dispatch("clicked")
    }   
</script>

<button type="button" on:click={click}>Click me</button>