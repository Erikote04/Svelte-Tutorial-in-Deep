<script>
    import Button from "./Button.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function restart() {
        dispatch("restarting");
    }
</script>

<Button on:clicked />

<button type="button" on:click={restart}>Restart</button>