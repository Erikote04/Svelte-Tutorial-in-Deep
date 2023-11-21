<script>
    let continents = ["Africa", "Antartica", "Asia", "Europe", "North America", "Oceania", "South America"];
    let continent = "Asia";
</script>

<p>You've select {continent}</p>

<select bind:value={continent}>
    {#each continents as c}
        <option value={c}>{c}</option>
    {/each}
</select>
