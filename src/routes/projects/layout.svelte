<script lang="ts">
	export let title;
</script>

<svelte:head>
    <title>{title} | mannybarreto.com</title>
    <meta property="og:title" content={title} />
</svelte:head>

<div class="flex flex-grow">
	<h1>{title}</h1>
    <slot />
	<a href="/projects">Back to project index</a>
</div>
