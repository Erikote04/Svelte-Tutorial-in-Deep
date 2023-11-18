<script>
    let tasks = [
        "Cut the grass",
        "Wash the dishes",
        "Take out the trash"
    ];
</script>

<h3>Tasks:</h3>

<ol>
    {#each tasks as task}
        <li>{task}</li>
    {/each}
</ol>

