<script>
    import Button from "./Button.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function restart() {
        dispatch("restarting");
    }

    function propagate() {
        dispatch("clicked");
    }
</script>

<Button on:clicked={propagate}/>

<button type="button" on:click={restart}>Restart</button>