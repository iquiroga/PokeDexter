<template>
  <div class="carousel col-12 col-md-10 col-lg-8 d-flex justify-content-center">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/slide1.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/slide2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

     <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/slide3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/slide4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carrousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>