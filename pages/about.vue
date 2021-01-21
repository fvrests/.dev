<template>
  <div class="px-12 max-w-screen-md mx-auto">
    <h2
      class="mb-12 text-6xl lg:text-7xl font-display text-coal dark:text-white"
    >
      about me
    </h2>

    <div class="max-w-xs mb-8">
      <img
        src="/portrait.png"
        class="w-full border-8 max-h-64 object-cover border-coal dark:border-night relative z-20 rounded-xl lg:h-80"
      />
    </div>
    <div class="text-lg">
      i'm a biology and psychology grad in migration to tech due to a discovered
      passion for development & design. i love oat lattes, building functional
      things that are also filled with pastels, pair programming with my partner
      <a href="https://mellow.dev/">mvllow</a>, and working on hobbies and
      disciplines. some of those at the moment include:
      <bullet-list
        :items="[
          'minimalism',
          'daily yoga practice',
          'ethical veganism',
          'sustainable & slow living',
          'living car-free',
          'slacklining',
        ]"
      />
      i am motivated by a sense of community and love making new connections, so
      my twitter DMs, email address, etc. are always open to new friends. 🌱
    </div>
  </div>
</template>
