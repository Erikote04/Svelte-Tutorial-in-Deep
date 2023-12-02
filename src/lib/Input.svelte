<script>
    export let identifier;
    export let formField;
    export let value;
</script>

<p>
    <label for={identifier}>{formField}: </label>
    <input type="text" id={identifier} bind:value>
</p>