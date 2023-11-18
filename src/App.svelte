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

<button disabled={name.length === 0}>Send</button>

<p>Hello, {name}. Your name has {name.length} characters</p>
