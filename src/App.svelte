<script>
    import Button from "./Button.svelte";

    let times = 0;

    function isClicked () {
        times += 1;
    }
</script>

<p>You've clicked me {times} {times === 1 ? "time" : "times"}</p>

<Button on:clicked={isClicked}/>