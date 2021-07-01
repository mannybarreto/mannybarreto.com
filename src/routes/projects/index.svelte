<script context="module" lang="ts">
    // @type {import('@svelte/kit').Load}
    export async function load({ page, fetch }) {
        const modules = import.meta.glob('./**.svx') 

        let projects = []

        for (const slug in modules) {
            projects.push(modules[slug]().then(({ metadata }) => metadata))
        }


        projects = await Promise.all(projects)

        return {
            props: {
                projects
            }
        }
    }
</script>

<script lang="ts">
    import Project from "$lib/components/Project.svelte"
    import type {ProjectFM} from "$lib/types/markdown"

    export let projects: ProjectFM[]
</script>

<svelte:head>
    <!-- TODO: extract postfix to constant -->
    <title>Projects | mannybarreto.com</title>
</svelte:head>

<!-- TODO: Extract divider to style or component, repeated in `../about.svelte` -->
<div class="self-center m-auto divided divide-y divide-yellow divide-opacity-60">
    <h1 class="text-2xl font-bold text-yellow"> Projects </h1>
    <ul class="mt-2">
        {#each projects as {title, slug, tldr, stack}}
            <Project {...{title, slug, tldr, stack}} />
        {/each}
    </ul>
</div>
