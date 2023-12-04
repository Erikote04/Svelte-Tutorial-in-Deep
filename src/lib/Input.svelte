<script>
    export let label;
    export let value;

    let valid = value.length > 0;
    let invalid = value.length === 0;
    let id = "_" + label.toLowerCase();

    function update() {
        valid = value.length > 0;
        invalid = value.length === 0;
    }
</script>

<p class:valid class:invalid>
    <label class="label" for={id}>{label}: </label>
    <input 
        type = "text" 
        id = {id} 
        bind:value
        on:keyup={update} 
    /> 
    <!--
        on:keyup is used because Svelte does not always update the value of the variable.
        Later we'll see another way to fix this problem. 
    -->
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