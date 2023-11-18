<script>
    import Task from "./Task.svelte"

    let tasks = [
        { name: "Cut the grass", finished: true },
        { name: "Wash the dishes", finished: false },
        { name: "Take out the trash", finished: true }
    ];
</script>

<h3>Tasks:</h3>

{#each tasks as task}
    <Task name={task.name} finished={task.finished} />
{/each}


