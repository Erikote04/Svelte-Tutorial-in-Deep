<script>
    export let colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black'];
    export let value = colors[0];
</script>

<p class="color" style:--txtcolor={value}>{value}</p>

<select bind:value>
    {#each colors as color}
        <option value={color}>{color}</option>
    {/each}
</select>

<style>
    .color {
        color: var(--txtcolor);
        font-size: 40px;
        font-weight: bold;
        margin: 0;
        line-height: 1;
    }
</style>