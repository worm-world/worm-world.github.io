<script lang="ts">
  import type { ComponentProps } from "svelte";
  import ProfileCard from "../../components/ProfileCard.svelte";

  const profiles: ComponentProps<ProfileCard>[] = [
    {
      name: "Andrew Lee",
      image: "/andrew.webp",
      description: `<p>
        Andrew is a student at the University of Utah graduating in May 2024 with a BS/MS degree in Computer Science. 
        He has worked as a software developer since 2019, and will be interning at Lucid Software this upcoming summer. 
        Against all odds, Andrew has a stellar record of 0 bugs written in his career <i>(citation needed)</i>. 
        He has a keen interest in machine learning, distributed systems, automation, and performance-oriented software. 
      </p>
      <p>
        He hopes to find a job using these skills that pays well enough to afford a doomsday bunker in case of a robot uprising. 
        He loves to learn about new technologies and software projects, and is passionate about pushing the forefront of computation. 
        He continues to contribute to his own obsolescence by often working on personal projects and open source software on GitHub. 
        After his entire line of work gets automated away, he’ll retire to his hobbies of basketball, soccer, paddleboarding, piano, and hanging out with his friends and family. 
      </p>`,
      githubURL: "https://github.com/candrewlee14",
      linkedinURL: "https://www.linkedin.com/in/c-andrew-lee/",
      websiteURL: "https://candrewlee14.github.io/",
    },
    {
      name: "Seth Gunsay",
      image: "/seth.jpeg",
      description: `<p>
          Seth is a student pursuing an H.B.S. degree in Computer Science. 
          When Seth isn’t working on this Capstone Project, he enjoys taking the time to crush it playing racquetball, backpack in the nearby mountains, and wax his gleaming bald head. 
          Seth has a passion for the more boring aspects of coding, including writing tests for everything, performing pristine quality assurance checks, and taking an over-zealous approach to reviewing PRs.
        </p>  
        <p>
          He also loves traveling and exploring new places. Seth’s favorite travel destination so far has been Odgen, Utah, where he enjoyed trying new foods and learning about the local culture. 
          Upon graduation, Seth plans to expand the scope of his travel to other states (possibly Montana) and work his way up to traveling to the more culturally diverse parts of Europe, such as the U.K.
          Finally, after indulging in this mid-mid-life crisis, Seth will return back to the states and move to New York, New York. 
          There, he will work with fellow bald aficionado, Jeff Bezos, and start as a Software Engineer with Amazon.
        </p>`,
      githubURL: "",
      linkedinURL: "https://www.linkedin.com/in/sethgunsay/",
      websiteURL: "",
    },
    {
      name: "Daniel Israelsen",
      image: "/daniel.webp",
      description: `<p>
        Daniel is completing his B.S. degree in Computer Science at the University of Utah, graduating in May 2023. 
        Over the course of his undergraduate studies, he has developed a passion for software engineering and learning about new technologies and the ways they can help people and businesses, 
        from digital design to artificial intelligence.
      </p>
      <p>
        In addition to computer science classes, he has taken a number of elective courses in economics, of which the favorite was game theory. 
        Daniel will be starting his career in the Platform Solutions division of Goldman Sachs in their Salt Lake City office following graduation. 
        In his free time, he enjoys playing some of his favorite songs on the piano, reading a variety of genres, and traveling.
      </p>`,
      githubURL: "",
      linkedinURL: "https://www.linkedin.com/in/daniel-israelsen/",
      websiteURL: "",
    },
    {
      name: "Will Bradshaw",
      image: "/will.jpeg",
      description: `<p>
        Will Bradshaw is a driven computer science major with a passion for exploring the intersections of AI, automation, and data visualization. Currently, he is pursuing a minor in Mathematics to complement his skills and knowledge in computer science. Will's interest in data visualization stems from his belief in the importance of making complex data understandable and accessible to a broader audience.
      </p>
      <p>
        When he's not coding or studying, you can find Will with a camera in hand or hitting the trails for a hike. His love for photography and the outdoors provides a much-needed break from the digital world, allowing him to recharge and find inspiration.
      </p>
      <p>
        As a team member, Will brings his analytical thinking, creativity, and attention to detail to every project he works on. He enjoys collaborating with others and is always willing to share his knowledge and expertise to achieve the best possible outcome.
      </p>`,
      githubURL: "https://github.com/willandtommine",
      linkedinURL: "",
      websiteURL: "",
    },
  ];
</script>

<div class="w-full flex flex-row justify-center py-2 pb-3">
  <div class="prose">
    <h1 class="text-center">Meet the Team</h1>
  </div>
</div>
<div class="flex flex-wrap justify-center items-start">
  {#each profiles as profile}
    <ProfileCard {...profile} />
  {/each}
</div>
