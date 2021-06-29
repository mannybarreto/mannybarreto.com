<script>
    import "../app.postcss";

    import { page } from '$app/stores'
    import Nav from '$lib/Nav.svelte'
</script>

<Nav path={$page.path}/>
<slot></slot>
