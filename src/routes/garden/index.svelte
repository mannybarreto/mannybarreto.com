<script context="module" lang="ts">
    // @type {import('@svelte/kit').Load}

    export async function load({page, fetch}) {
        const modules = import.meta.glob('./**.md')

        let leaves = []

        for (const slug in modules) {
            leaves.push(modules[slug]().then(({metadata}) => {
                return {...metadata, slug: slug}
            }))
        }

        leaves = await Promise.all(leaves)

        return {
            props: {
                leaves: leaves,
            }
        }
    }
</script>

<script lang="ts">
    import {SITE_POSTFIX} from "$lib/utils/constants"
    import type {Leaf} from "$lib/types/garden";

    export let leaves: Leaf[]
</script>

<svelte:head>
    <title>garden {SITE_POSTFIX}</title>
</svelte:head>

<div>
    <h1>
        Leaves
    </h1>
    <ul>
        {#each leaves as {title}}
            <li>{title}</li>
        {/each}
    </ul>
</div>