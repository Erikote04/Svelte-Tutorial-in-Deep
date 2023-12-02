<script>
    import { createEventDispatcher } from "svelte";

    export let identifier;
    export let formField;
    export let min;
    export let max;

    const dispatch = createEventDispatcher();

    function changeMin(e) {
        const newMin = parseInt(e.target.value);
        dispatch('update', {min: newMin, max});
    }

    function changeMax(e) {
        const newMax = parseInt(e.target.value);
        dispatch('update', {min, max: newMax});
    }
</script>

<p>
    <label for={`${identifier}_min`}>Minimum {formField}</label>
    <input 
        type = "range" 
        min = 0 
        max = 50000 
        value={min}
        on:change={changeMin}
    />
    <span>{min}</span>
</p>
<p>
    <label for={`${identifier}_max`}>Maximum {formField}</label>
    <input 
        type = "range" 
        min = 0 
        max = 50000 
        value={max}
        on:change={changeMax}
    />
    <span>{max}</span>
</p>