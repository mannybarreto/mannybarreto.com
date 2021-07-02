<script lang="ts">
    import { SITE_POSTFIX } from "$lib/utils/constants";

	export let title;
</script>

<svelte:head>
    <title>{title} {SITE_POSTFIX}</title>
    <!-- TODO: Investigate where else I should do this -->
    <meta property="og:title" content={title} />
</svelte:head>

<div class="m-auto">
	<h1>{title}</h1>
    <slot />
	<a href="/projects">Back to project index</a>
</div>
