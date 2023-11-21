<script>
    import Button from "./Button.svelte";

    let times = 0;
    let dates = [];

    function isClicked(event) {
        const date = event.detail.date;
        dates = [...dates, date];
        times += 1;
    }
</script>

<p>You've clicked me {times} {times === 1 ? "time" : "times"}</p>

<Button on:clicked={isClicked}/>

{#each dates as date}
    <p>{date}</p>
{/each}