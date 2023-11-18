<script>
    let tasks = [
        "Cut the grass",
        "Wash the dishes",
        "Take out the trash"
    ];
</script>

<h3>Tasks:</h3>

{#each tasks as task, index}
    <p><strong>{index}:</strong> {task}</p>
{/each}


