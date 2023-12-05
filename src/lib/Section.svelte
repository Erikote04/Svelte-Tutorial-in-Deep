<script>
    export let title;
</script>

<section>
    <header>
        <slot name="header">
            <h1>{title}</h1>
        </slot>
    </header>
    <slot name="main">
        <p>Ask to one of our waiters</p> <!--This is some default content-->
    </slot>
</section>