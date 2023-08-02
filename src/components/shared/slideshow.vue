<template>
  <div class="flex items-center justify-between">
    <div class="w-1/5">
      <div class="pb-6">
        <h2 class="pb-6">
          My works
        </h2>
        <p>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        </p>
      </div>
      <div class="flex items-center slide-pagination">
        <span class="cursor-pointer slide-prev" @click="prev">&lt;<span class="text-grey-primary pl-1">/</span></span>
        <div class="px-3 flex items-center carousel-dots">
          <span class="mr-3 active" />

          <span class="mr-3" />
          <span class="w-1 h-1" />
        </div>
        <span class="cursor-pointer slide-next" @click="next"><span class="text-grey-primary pr-1">/</span>&gt;</span>
      </div>
    </div>
    <div class="carousel-clients-works flex w-3/4 justify-between overflow-hidden">
      <CarouselSlide v-for="(block,index) in blocksCurrent" :key="index" :index="index" :slide-current="slideCurrent">
        <div class="carousel-block mb-6" style="margin-left: auto; margin-right: auto;">
          <img :src="src/assets/images/about-img.jpg" :alt="block.title">
        </div>

        <div class="text-center w-80">
          <h3 class="font-bold" v-text="block.title" />
          <ul v-for="(list, ind) in block.lists" :key="ind" class="disc-green">
            <li v-text="list.title" />
          </ul>
        </div>
      </CarouselSlide>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blocks: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    slideCurrent: 0
  }),
  computed: {
    slidesLen () {
      return this.blocks.length
    },
    blocksCurrent() {
    const numShown = 3;
    const blocksCurrent = [];

    for(let i = 0; i < numShown; i++) {
      const index = (this.slideCurrent + i) % this.blocks.length;
      blocksCurrent.push(this.blocks[index]);
    }
    return blocksCurrent;
    }
  },
  methods: {
    prev () {
      if (this.slideCurrent <= 0) {
        this.slideCurrent = this.slidesLen - 1
      } else {
        this.slideCurrent--
      }
    },
    next () {
      if (this.slideCurrent >= this.slidesLen - 1) {
        this.slideCurrent = 0
      } else {
        this.slideCurrent++
      }
    }
  }
}
</script>