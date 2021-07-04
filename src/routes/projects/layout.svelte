<script lang="ts">
    import { SITE_POSTFIX } from "$lib/utils/constants";

	export let title;
</script>

<svelte:head>
    <title>{title} {SITE_POSTFIX}</title>
    <!-- TODO: Investigate where else I should do this -->
    <meta property="og:title" content={title} />
</svelte:head>

<div class="m-auto sm:w-1/4">
    <h3 class="text-purple-darkest">Projects /</h3>
	<h1>{title}</h1>
    <slot />
    <hr />
	<a href="/projects">Back to project index</a>
</div>
