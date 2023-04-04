<script lang="ts">
  import "../app.css";
  import PageTransition from "../components/PageTransition.svelte";
  import type { LayoutData } from "./$types";
  export let data : LayoutData;
</script>

<svelte:head>
    <title>WormWorld</title>
    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg">
    <link rel="icon" type="image/png" href="/favicon/favicon.png">
</svelte:head>

<div class="w-full flex flex-col items-center">
  <div class="flex flex-row items-center normal-case text-5xl mt-4">
    <img src="/worm.svg" alt="WormWorld" class="h-24" />
    <h1 class="wormworld">ormWorld</h1>
  </div>
  <div class="max-w-5xl">
    <div class="navbar bg-base-100">
      <div class="flex-1 mr-12" />
      <div class="flex-none">
        <ul class="menu menu-horizontal px-4">
          <li><a href="/">About</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/download">Download</a></li>
          <li><a href="/guide">User Guide</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="w-full flex flex-row justify-center items-center">
    <div class="ml-6 sm:ml-0">
      <PageTransition refresh={data.key.href}><slot /></PageTransition>
    </div>
  </div>

  <footer class="footer footer-center p-4 text-gray-400">
    <div class="flex flex-row">
      <img src="/worm.svg" alt="WormWorld" class="h-12" />
      <p class="ml-2">Copyright © 2023 - All right reserved</p>
    </div>
  </footer>
</div>