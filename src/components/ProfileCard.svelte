<script lang="ts">
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import IoIosGlobe from "svelte-icons/io/IoIosGlobe.svelte";

  export let name: string;
  export let image: string;
  export let description: string;
  export let githubURL: string;
  export let linkedinURL: string | undefined = undefined;
  export let websiteURL: string | undefined = undefined;

</script>

<div class="card w-96 bg-base-100 shadow-xl m-4">
  <figure class=""><img src={image} alt={name} /></figure>
  <div class="card-body">
    <div class="flex flex-row justify-between">
      <h2 class="card-title">{name}</h2>
      <div class="h-6 flex flex-row justify-end">
        {#if linkedinURL !== undefined && linkedinURL !== ""}
          <a href={githubURL} target="_blank" class="w-6 mr-4"><FaGithub /></a>
        {/if}
        {#if linkedinURL !== undefined && linkedinURL !== ""}
          <a href={linkedinURL} target="_blank" class="w-6 mr-4"><FaLinkedin /></a>
        {/if}
        {#if websiteURL}
          <a href={websiteURL} target="_blank" class="w-6"><IoIosGlobe /></a>
        {/if}
      </div>
    </div>
    <p>{description}</p>
    <div class="card-actions justify-end" />
  </div>
</div>
