<script>
    let name = "";
    function handle(e) {
        const target = e.target;
        name = e.target.value;
    }
</script>

<input 
    class="text" 
    type="text" 
    placeholder="Name" 
    on:keyup={handle} 
/>

{#if name.length === 0}
    <p>Please enter your name</p>
{/if}
