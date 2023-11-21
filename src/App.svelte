<script>
    import ButtonGroup from "./Button-Group.svelte";

    let times = 0;

    function startFromZero() {
        times = 0;
    }

    function isClicked() {
        times += 1;
    }
</script>

<p>You've clicked me {times} {times === 1 ? "time" : "times"}</p>

<ButtonGroup on:restarting={startFromZero} on:clicked={isClicked} />