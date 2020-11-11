<template>
  <div
    class="w-full h-full border-solid border-8 border-night light:text-night text-sm"
  >
    <div class="px-8 py-2 sm:p-10 max-h-screen w-full">
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
      <div
        class="h-screen flex flex-row items-center justify-center leading-loose"
      >
        <div class="w-1/5 px-6">
          <img src="../assets/images/bio@2x.png" class="object-contain" />
        </div>
        <div class="px-6">
          <h2
            class="font-display tracking-widest text-xl sm:text-4xl font-bold"
          >
            hi!
          </h2>
          <p>
            i'm
            <span class="bg-rose text-night px-1 font-bold">lynn</span>.<br />
            i’m interested in careers in
            <span class="bg-lemon text-night px-1 font-bold"
              >front-end development, accessibility, UI & UX</span
            >.<br />
            the tools i use most include
            <span class="bg-lavender text-night px-1 font-bold"
              >vue, react, html, css, js, & figma</span
            >.<br />
            i’m searching for communities where
            <span class="bg-leaf text-night px-1 font-bold"
              >mutual growth & mentorship</span
            >
            &nbsp;are valued & celebrated. ✨<br />
            when i’m not building things, i love learning new
            <span class="bg-rose text-night px-1 font-bold"
              >skills & disciplines</span
            >. some things i'm currently working on:
          </p>
          <bullet-list>
            <bullet-item>minimalism</bullet-item>
            <bullet-item>ethical veganism</bullet-item>
            <bullet-item>sustainable & slow living</bullet-item>
            <bullet-item>living car-free</bullet-item>
            <bullet-item>jogging (this one is a challenge)</bullet-item>
            <bullet-item>slacklining (when indiana weather allows)</bullet-item>
          </bullet-list>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
import BulletItem from '../components/bullet-item'
import BulletList from '../components/bullet-list'
export default {
  components: { BulletItem, BulletList },
}
</script>
