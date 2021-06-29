<script>
    import "../app.postcss";

    import { page } from '$app/stores'
    import Nav from '$lib/Nav.svelte'
    import Footer from '$lib/Footer.svelte'
</script>

<Nav path={$page.path}/>

<!-- Whole application inside a flex container, see ../app.postcss -->
<div class="flex-grow">
    <slot></slot>
</div>

<Footer></Footer>
