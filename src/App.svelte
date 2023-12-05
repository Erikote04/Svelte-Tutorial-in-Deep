<script>
    import Section from "./lib/Section.svelte";
</script>

<main>
    <Section title="Menu of the Day">
        <svelte:fragment slot="main">
            <p>Taco Tuesday</p>
            <p>Margaritas</p>
            <p>Nachos with cheese</p>
        </svelte:fragment>
    </Section>
</main>
