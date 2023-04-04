<div class="flex flex-col">
<article class="prose">
<p class="first-letter:text-3xl">
  Our software application helps to serve the needs of modern genetic
  researchers in a laboratory research setting, specifically those carrying out
  genetic crossings on the model organism C. Elegans, which is a very small worm
  whose biology makes it a highly useful if somewhat surprising analog to humans
  in certain respects. A cursory search for genetics software tools shows that
  there is an abundance of tools to match the wide variety of areas, approaches,
  and research methods used by geneticists. It is not surprising that in their
  attempts to uncover the mysteries of genetic code, researchers and developers
  have turned to computer code and the computational power and productivity
  enhancements it can proffer. One of our sponsors, in fact, has developed and
  published a tool called ApE (https://jorgensen.biology.utah.edu/wayned/ape),
  which is a “plasmid editor”. Despite this, there does not seem to be a
  well-known gene-crossing planner or scheduler that serves the desired ends of
  our sponsors or those with similar aims. Our tool provides not only technical
  conveniences such as the calculations of statistical frequencies but also
  practical and logistical features to organize and coordinate active genetic
  crosses.
</p>
<p>
  In light of this, the WormWorld application promises to fill an open niche in
  this area and potentially enhance genetic-crossing research productivity.
  Beyond this principal use, there are secondary uses for the application–as a
  pedagogical tool, for example, that can help illustrate the nature of genetic
  crosses or bridge the experience gap for a new researcher through an
  interactive design process and the display of helpful information.
</p>
<p>
  We will be using the Tauri app framework, which allows us to develop using a
  web frontend and a Rust backend. Tauri is an alternative to Electron that
  helps developers build lean and performant apps. For the web frontend, we’ll
  use React with Typescript. Additionally, rather than try to build every
  component from scratch, we plan on making use of an open-source component
  library (such as MaterialUI) to speed up development and allow us to focus on
  the core complexities of the project. For styling, we’ll likely use
  TailwindCSS and the Feather open-source icon suite. On the backend, we’ll use
  Sqlite3 bindings for Rust to store and query the data for strains, genes,
  alleles, and breeding timelines. We may use the most popular Rust ORM called
  Diesel, or call SQL directly with the sqlx package. Both of these frameworks
  have helpful compile-time type checking and testing/mock modules which will
  help produce more consistent and robust software throughout the development
  process. With the current project scope, we won’t need any cloud hosting as
  our sponsors plan to run the software from a local machine. The app will run
  on a user’s desktop with a local Sqlite3 database that they can import and
  export data from.
</p>
<p>
  The Tauri app framework uses each operating system’s native webviews to build
  cross-platform desktop applications. This allows our app to run on Linux,
  MacOS, and Windows. If a desktop computer can run a browser, it can run our
  application. The installation process for a user should be simple: download
  the installer on Windows, a bundle on MacOS, or a .deb package for Linux.
  Tauri includes an updater in the binaries, so once a user has installed our
  app, we should be able to publish updates to them without them having to
  manually download it again. Given that this will be a desktop application,
  there is no additional hardware needed beyond a computer to run the
  application.
</p>
</article>
</div>

<style lang="postcss">
  p {
      /* @apply indent-8; */
  }
</style>