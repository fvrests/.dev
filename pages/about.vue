<template>
  <div>
    <BaseNav></BaseNav>
    <bullet-list
      :items="[
        'minimalism',
        'ethical veganism',
        'sustainable & slow living',
        'living car-free',
        'slacklining',
        'jogging',
      ]"
    />
  </div>
</template>

<script>
import BulletList from '../components/bullet-list'
import BaseNav from '../components/base-nav'
export default {
  components: { BulletList, BaseNav },
}
</script>
