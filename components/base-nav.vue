<template>
  <div class="h-24 w-full">
    <div class="h-24 flex flex-row items-center justify-between mx-8">
      <router-link
        to="/"
        class="title font-display tracking-widest text-xl sm:text-4xl font-bold"
        >fvrests
      </router-link>
      <nav class="hidden sm:inline-block">
        <ul class="flex flex-row font-bold">
          <li class="px-6">
            <router-link active-class="text-red-500" to="/about"
              >about</router-link
            >
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
  </div>
</template>
