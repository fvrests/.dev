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
      <span class="highlight bg-rose">lynn</span>.<br /><br />
      i’m exploring
      <span class="highlight bg-lemon"
        >front-end development, accessibility, UI & UX</span
      >.<br /><br />
      the tools i use most include
      <span class="highlight bg-leaf">vue, react, html, css, js, & figma</span
      >.<br /><br />
      i’m searching for communities where
      <span class="highlight bg-lavender">mutual growth & mentorship</span>
      are valued & celebrated. ✨<br /><br />
      i love learning
      <span class="highlight bg-rose">hobbies & disciplines</span>. &nbsp; get
      to know me over HERE.
    </BaseSection>
    <BaseHeading>Projects</BaseHeading>
    <BaseSection
      title="lavender"
      image="lavender@2x.png"
      theme-color="lavender"
      inverse
    >
      lavender is a calming, minimal chrome extension that overrides the new tab
      with live-updating time & weather data and a pastel theme.
    </BaseSection>
    <BaseSection title="rosé pine" image="rosepine@2x.png" theme-color="rose">
      rosé pine is a theme suite that began with support for visual studio code,
      hyper, and iterm2 and has expanded in popularity to include many community
      submissions. it features dark, moonlit, & dawn variants, each with subdued
      palettes chosen for readability.
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
import BaseNav from '../components/base-nav'
import BaseHeading from '../components/base-heading'

export default {
  components: {
    BaseSection,
    BaseNav,
    BaseHeading,
  },
}
</script>
