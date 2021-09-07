<script context="module" lang="ts">
    // @type {import('@svelte/kit').Load}
    export async function load({page, fetch}) {
        const modules = import.meta.glob('./**.md')

        let socials = []

        for (const slug in modules) {
            socials.push(modules[slug]().then(({metadata}) => metadata))
        }

        socials = await Promise.all(socials)

        return {
            props: {
                socials: socials
            }
        }
    }
</script>

<script lang="ts">
    import {SITE_POSTFIX, CONTACT_EMAIL} from "$lib/utils/constants";
    import type {SocialFM} from "$lib/types/markdown";

    export let socials: SocialFM[]
</script>

<svelte:head>
    <title>contact {SITE_POSTFIX}</title>
</svelte:head>

<div class="divided divide-y divide-yellow divide-opacity-60 m-auto">
    <h2 class="text-yellow">Contact Me</h2>
    <div>
        <p class="w-full my-3">
            My career, family/friends, hobbies, and projects demand quite a lot of attention from my embarrassingly easily distracted mind.
            Thus, after reading <a href="https://www.calnewport.com/contact/">Cal Newport's</a> philosophy on the matter,
            I decided to quit social media with few exceptions (see below), and keep my correspondence to near essentials.
            However, I can't help but want to hear from readers and colleagues, so please feel free to <a href={`mailto:${CONTACT_EMAIL}`}>reach out</a> if you deem it appropriate.
        </p>
    </div>
    <div class="flex">
        <h3 class="mt-auto">Socials: </h3>
        {#each socials as social}
            <a href={social.url} class="m-3 icon">
                <img src={social.icon} alt={`${social.name} Icon`}/>
            </a>
        {/each}
    </div>
</div>

<style lang="postcss">
    .icon {
        /** Undo `a` hover effect from app.postcss */
        &:hover,
        &:focus {
            @apply bg-background;
        }
    }
</style>