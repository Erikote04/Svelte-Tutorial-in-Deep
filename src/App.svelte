<script>
    let accept = false;
</script>

{#if accept}
    <p>She said YES!!!</p>
{:else}
    <p>She said no... I'm going to the gym</p>
{/if}

<p>
    <label>Change my value (her decision)</label>
    <input 
        type="checkbox" 
        bind:checked={accept}
    >
</p>
