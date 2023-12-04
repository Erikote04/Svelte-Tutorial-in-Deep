<script>
    export let label;
    export let value;

    let id = "_" + label.toLowerCase();
</script>

<p class={value.length > 0 ? 'valid' : 'invalid'}>
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

    .valid input {
        background-color: #c0f0c0;
    }

    .invalid input {
        background-color: #f0c0c0;
    }

    .invalid label {
        color: red;
    }
</style>