<script>
    export let label;
    export let value;

    let id = "_" + label.toLowerCase();
</script>

<p>
    <label class="label" for={id}>{label}: </label>
    <input 
        type = "text" 
        id = {id} 
        bind:value
    />
</p>

<style>
    .label {
        font-weight: bold;
    }
</style>