<script>
    import "../app.postcss";

    import { page } from '$app/stores'
    import Nav from '$lib/Nav.svelte'
    import Footer from '$lib/Footer.svelte'
</script>

<body class="flex flex-col min-h-screen">
    <Nav path={$page.path}/>

    <div class="flex-grow">
        <slot></slot>
    </div>

    <Footer></Footer>
</body>
