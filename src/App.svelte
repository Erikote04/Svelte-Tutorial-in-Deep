<script lang="ts">
    // Now we're ready to use TypeScript
    import Section from "./lib/Section.svelte";
    let title: string = "Menu of the Day";
</script>

<main>
    <Section {title}>
        <svelte:fragment slot="main">
            <p>Taco Tuesday</p>
            <p>Margaritas</p>
            <p>Nachos with cheese</p>
        </svelte:fragment>
    </Section>
</main>

<style lang="scss">
    // Now we're ready to use scss
</style>