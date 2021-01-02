<template>
  <PageLayout>
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
  </PageLayout>
</template>

<script>
import BulletList from '../components/bullet-list'
import PageLayout from '../components/page-layout'
export default {
  components: { BulletList, PageLayout },
}
</script>
