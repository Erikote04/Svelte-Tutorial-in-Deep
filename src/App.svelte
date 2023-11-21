<script>
    let input;

    function focus() {
        input ? input.focus() : console.log("input does't exist");
        console.log("Search button clicked");
    }
</script>

<input 
    type="text" 
    placeholder="What are you looking for?"
    bind:this={input}>
<button type="button" on:click={focus}>Search</button>