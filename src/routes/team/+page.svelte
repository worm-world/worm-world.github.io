<script lang="ts">
  import type { ComponentType } from "svelte";
  import ProfileCard from "../../components/ProfileCard.svelte";

  const profiles = [
    {
      name: "Andrew Lee",
      image: "/andrew.webp",
      description:
        "Andrew made the team learn Rust for no good reason.",
      githubURL: "",
      linkedinURL: "",
    },
    {
      name: "Seth Gunsay",
      image: "/seth.jpeg",
      description:
        "Seth is a TDD devotee.",
      githubURL: "",
      linkedinURL: "",
    },
    {
      name: "Daniel Israelsen",
      image: "/daniel.png",
      description:
        "Daniel knows worms genetics.",
      githubURL: "",
      linkedinURL: "",
    },
    {
      name: "Will Bradshaw",
      image: "/will.jpeg",
      description:
        "Will likes memes and schedulers.",
      githubURL: "",
      linkedinURL: "",
    },
  ];


</script>

<div class="flex flex-wrap justify-center items-center">
    {#each profiles as profile}
        <ProfileCard {...profile} />
    {/each}
</div>
