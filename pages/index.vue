<template>
  <div
    class="w-full border-solid border-8 border-night light:text-night text-sm"
  >
    <div class="px-8 py-2 sm:p-10 w-full">
      <div class="mx-4 sm:mx-18">
        <div class="flex flex-row items-center justify-between h-8">
          <a
            href="#"
            class="title font-display tracking-widest text-xl sm:text-4xl font-bold"
            >fvrests</a
          >
          <nav class="hidden sm:inline-block">
            <ul class="flex flex-row font-bold">
              <li class="px-6">
                <a href="#">about</a>
              </li>
              <li class="px-6">
                <a href="#">projects</a>
              </li>
              <li class="px-6">
                <a href="#">contact</a>
              </li>
              <li class="px-6">
                <a href="#">blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="h-screen flex flex-row items-center justify-center">
          <div class="w-64 px-6">
            <img src="../assets/images/bio@2x.png" class="object-contain" />
          </div>
          <div class="px-6">
            <heading>
              hi!
            </heading>
            <p class="leading-loose">
              i'm
              <span class="bg-rose text-night px-1 mx-1 font-bold">lynn</span
              >.<br />
              i’m interested in careers in
              <span class="bg-lemon text-night px-1 mx-1 font-bold"
                >front-end development, accessibility, UI & UX</span
              >.<br />
              the tools i use most include
              <span class="bg-lavender text-night px-1 mx-1 font-bold"
                >vue, react, html, css, js, & figma</span
              >.<br />
              i’m searching for communities where
              <span class="bg-leaf text-night px-1 mx-1 font-bold"
                >mutual growth & mentorship</span
              >
              are valued & celebrated. ✨<br />
              i love learning
              <span class="bg-rose text-night px-1 mx-1 font-bold"
                >hobbies & disciplines</span
              >. &nbsp;some things i'm currently working on can be found HERE .
            </p>
          </div>
        </div>
        <div class="h-screen w-full flex flex-col justify-center space-y-40">
          <heading>projects</heading>
          <div
            class="flex flex-col-reverse sm:flex-row items-center justify-between space-x-16"
          >
            <div class="max-w-sm">
              <h3 class="text-xl font-bold">lavender</h3>
              <p class="mt-4">
                lavender is a calming, minimal chrome extension that overrides
                the new tab with live-updating time & weather data against a
                pastel theme.
              </p>
              <BulletList>
                <BulletItem>vue & vue composition API</BulletItem>
                <BulletItem>fetching data from external APIs</BulletItem>
                <BulletItem>state management with vuex</BulletItem>
                <BulletItem>live-updating components</BulletItem>
                <BulletItem>asynchronous data fetching</BulletItem>
              </BulletList>
            </div>
            <div class="w-full">
              <img
                src="../assets/images/lavender@2x.png"
                class="object-contain"
              />
            </div>
          </div>
        </div>
        <div
          class="h-screen w-full flex flex-row items-center justify-between space-x-16"
        >
          <div class="w-full">
            <img
              src="../assets/images/rosepine@2x.png"
              class="object-contain"
            />
          </div>
          <div class="max-w-sm">
            <h3 class="text-xl font-bold">rosé pine</h3>
            <p class="mt-4">
              rosé pine is a theme suite that began with support for visual
              studio code, hyper, and iterm2 and has expanded in popularity to
              include many community submissions. it features dark, moonlit, &
              dawn variants, each with subdued palettes chosen for readability.
            </p>
            <BulletList>
              <BulletItem>managing & orgaizing a public git repo</BulletItem>
              <BulletItem>color theory</BulletItem>
              <BulletItem>navigating & writing JSON files</BulletItem>
              <BulletItem>building & presenting a brand</BulletItem>
              <BulletItem>pair programming</BulletItem>
            </BulletList>
          </div>
        </div>
        <div
          class="h-screen w-full flex flex-row items-center justify-between space-x-16"
        >
          <div class="max-w-sm">
            <h3 class="text-xl font-bold">wakely</h3>
            <p class="mt-4">
              wakely is a conceptual ecommerce website i designed & built to
              strengthen my skills in page layout & design, CSS & HTML
              structures, & basic principles of UI / UX.
            </p>
            <BulletList>
              <BulletItem>react & nextJS</BulletItem>
              <BulletItem>building page layouts with CSS</BulletItem>
              <BulletItem>logo design</BulletItem>
              <BulletItem>brand identity</BulletItem>
              <BulletItem>writing copy & call to action components</BulletItem>
            </BulletList>
          </div>
          <div class="w-full">
            <img src="../assets/images/wakely@2x.png" class="object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
html {
  background: var(--color-night);
}
body {
  height: 100%;
}
@media (prefers-color-scheme: light) {
  body {
    background: var(--color-paper);
    color: var(--color-night);
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: var(--color-coal);
    color: white;
  }
}
</style>

<script>
import Heading from '../components/heading'
import BulletItem from '../components/bullet-item'
import BulletList from '../components/bullet-list'
export default {
  components: { BulletItem, BulletList, Heading },
}
</script>
