<template>
  <div
    class="w-full border-solid border-8 border-night light:text-night text-sm"
  >
    <div class="overscroll overscroll-top"></div>
    <BaseNav></BaseNav>
    <BaseSection
      heading="hi!"
      image="bio@2x.png"
      theme-color="lemon"
      image-width="64"
    >
      i'm
      <span class="highlight bg-rose">lynn</span>.<br />
      i’m interested in careers in
      <span class="highlight bg-lemon"
        >front-end development, accessibility, UI & UX</span
      >.<br />
      the tools i use most include
      <span class="highlight bg-lavender"
        >vue, react, html, css, js, & figma</span
      >.<br />
      i’m searching for communities where
      <span class="highlight bg-lavender">mutual growth & mentorship</span>
      are valued & celebrated. ✨<br />
      i love learning
      <span class="highlight bg-rose">hobbies & disciplines</span>. &nbsp;some
      things i'm currently working on can be found HERE .
    </BaseSection>
    <BaseSection
      title="lavender"
      image="lavender@2x.png"
      theme-color="lavender"
      inverse
    >
      lavender is a calming, minimal chrome extension that overrides the new tab
      with live-updating time & weather data against a pastel theme.
      <BulletList>
        <BulletItem>vue & vue composition API</BulletItem>
        <BulletItem>fetching data from external APIs</BulletItem>
        <BulletItem>state management with vuex</BulletItem>
        <BulletItem>live-updating components</BulletItem>
        <BulletItem>asynchronous data fetching</BulletItem>
      </BulletList>
    </BaseSection>
    <BaseSection title="rosé pine" image="rosepine@2x.png" theme-color="rose">
      rosé pine is a theme suite that began with support for visual studio code,
      hyper, and iterm2 and has expanded in popularity to include many community
      submissions. it features dark, moonlit, & dawn variants, each with subdued
      palettes chosen for readability.
      <BulletList>
        <BulletItem>managing & orgaizing a public git repo</BulletItem>
        <BulletItem>color theory</BulletItem>
        <BulletItem>navigating & writing JSON files</BulletItem>
        <BulletItem>building & presenting a brand</BulletItem>
        <BulletItem>pair programming</BulletItem>
      </BulletList>
    </BaseSection>
    <BaseSection
      title="wakely"
      image="wakely@2x.png"
      theme-color="leaf"
      inverse
    >
      wakely is a conceptual promotional site i designed & built to strengthen
      my skills in page layout & design, CSS & HTML structures, & basic
      principles of UI / UX.
      <BulletList>
        <BulletItem>react & nextJS</BulletItem>
        <BulletItem>building page layouts with CSS</BulletItem>
        <BulletItem>logo design</BulletItem>
        <BulletItem>brand identity</BulletItem>
        <BulletItem>writing copy & call to action components</BulletItem>
      </BulletList>
    </BaseSection>
    <div class="fixed bg-night -top-12 h-14 overscroll overscroll-bottom"></div>
  </div>
</template>
<style>
.overscroll {
  left: -1rem;
  right: -1rem;
  position: fixed;
  background: var(--color-night);
  height: 3.5rem;
}
.overscroll-top {
  top: -3rem;
}
.overscroll-bottom {
  bottom: -3rem;
}
</style>

<script>
import BaseSection from '../components/base-section'
import BulletItem from '../components/bullet-item'
import BulletList from '../components/bullet-list'
import BaseNav from '../components/base-nav'

export default {
  components: {
    BulletItem,
    BulletList,
    BaseSection,
    BaseNav,
  },
}
</script>
