<script context="module" lang="ts">
    // @type {import('@svelte/kit').Load}
    export async function load({ page, fetch }) {
        const modules = import.meta.glob('./**.md')

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
    import { SITE_POSTFIX } from "$lib/utils/constants"
    import type {ProjectFM} from "$lib/types/markdown"

    import Project from "$lib/components/Project.svelte"

    export let projects: ProjectFM[]
</script>

<svelte:head>
    <title>projects {SITE_POSTFIX}</title>
</svelte:head>

<!-- TODO: Extract divider to style or component, repeated in `../about.svelte` -->
<div class="divided divide-y divide-yellow divide-opacity-60 m-auto">
    <h1 class="text-2xl font-bold text-yellow"> Projects </h1>
    <ul>
        {#each projects as {title, slug, tldr, stack}}
            <Project {...{title, slug, tldr, stack}} />
        {/each}
    </ul>
</div>
