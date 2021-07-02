<script lang="ts">
    import type {Framework} from '$lib/types/markdown'

    export let title: string
    export let slug: string
    export let tldr: string
    export let stack: Framework[]
</script>

<li class={"mt-2"}>
    <a href="projects/{slug}" rel="prefetch" class="font-bold text-xl text-purple">{title}</a>
    <div>{tldr}</div>
    <div class="text-purple-darkest">Tools: 
        {#each stack as {name, link}, i}
            <!-- List tools without trailing comma -->
            <a href={link}>{name}</a>{#if i < (stack.length - 1)},&nbsp{/if}
        {/each}
    </div>
</li>
