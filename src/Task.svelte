<script>
    export let name;
    export let finished;
</script>

{#if finished}
    <p><del>{name}</del> ✅</p>
{:else}
    <p>{name}</p>
{/if}
