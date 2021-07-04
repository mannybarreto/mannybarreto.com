<script lang="ts">
  export let path;
</script>

<style lang="postcss">
  .nav-default {
    @apply px-3 py-2 rounded-md text-sm leading-5 font-medium no-underline transition duration-150 ease-in-out text-base text-foreground;
  }
  .nav-default:focus {
    @apply ring text-purple bg-black;
  }
  .nav-active {
    @apply text-purple font-bold border-2 border-purple;
  }
  .nav-active:hover {
    @apply text-black bg-purple;
  }
  .nav-inactive {
         
  }
  .nav-inactive:hover {
    @apply text-black bg-purple;
  }
</style>

<nav class="flex grid-cols-4 gap-6 my-6 mx-auto sm:ml-10">
    <a href="/."
        class="{ path === '/' ? 'nav-active' : 'nav-inactive' } nav-default">Home</a>
    <a href="/blog"
       class="{ path.startsWith('/blog') ? 'nav-active' : 'nav-inactive'} nav-default">Blog</a>
    <a href="/about"
       class="{ path.startsWith('/about') ? 'nav-active' : 'nav-inactive'} nav-default">About</a>
    <a href="/projects"
       class="{ path.startsWith('/projects') ? 'nav-active' : 'nav-inactive'} nav-default">Projects</a>
</nav>
