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

<p>Hello, {name}. Your name has {name.length} characters</p>

<style>
    .text {
        font-size: 1.5rem;
    }
</style>