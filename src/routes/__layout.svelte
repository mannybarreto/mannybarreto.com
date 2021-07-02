<script>
    import "../styles/app.postcss";
        import "../styles/fonts.postcss";

    import { page } from '$app/stores'
    import Nav from '$lib/components/Nav.svelte'
    import Footer from '$lib/components/Footer.svelte'
</script>

<Nav path={$page.path}/>

<!-- Whole application inside a flex container, see ../app.postcss -->
<div class="flex flex-grow">
    <slot></slot>
</div>

<Footer></Footer>
