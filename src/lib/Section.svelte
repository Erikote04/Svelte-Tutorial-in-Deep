<script>
    export let title;
</script>

<section>
    <h1>{title}</h1>
    <slot>
        <p>Ask to one of our waiters</p> <!--This is some default content-->
    </slot>
</section>