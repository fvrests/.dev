<template>
  <div>
    <BaseNav></BaseNav>
    <bullet-list>
      <bullet-item>minimalism</bullet-item>
      <bullet-item>ethical veganism</bullet-item>
      <bullet-item>sustainable & slow living</bullet-item>
      <bullet-item>living car-free</bullet-item>
      <bullet-item>slacklining</bullet-item>
      <bullet-item>jogging (a challenge)</bullet-item>
    </bullet-list>
  </div>
</template>

<script>
import BulletList from '../components/bullet-list'
import BulletItem from '../components/bullet-item'
import BaseNav from '../components/base-nav'
export default {
  components: { BulletItem, BulletList, BaseNav },
}
</script>
