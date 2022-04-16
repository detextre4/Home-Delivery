<template>
  <section id="home" class="parent">
    <v-col class="contup relative divrow">
      <aside class="conttag jcenter divcol">
        <h1 class="h4-em">Categorías</h1>
        <h2 class="h6-em">Populares</h2>
      </aside>

      <aside class="sectright">
        <v-carousel
          v-model="carouselCategories"
          hide-delimiters
          :show-arrows="false"
        >
          <template v-for="(item, index) in sliderCategories">
            <v-carousel-item
              v-if="(index + 1) % columnsCategories === 1 || columnsCategories === 1"
              :key="index"
            > 
              <v-row class="fill-height spacea divpadd">
                <template v-for="(n,i) in columnsCategories">
                  <template v-if="(+index + i) < sliderCategories.length">
                    <v-col :key="i">
                      <v-card color="var(colorCartas)" class="cartasHome divcol center gap"
                        :class="{ contIconActive: sliderCategories[+index + i].active }"
                        @click="SelectCardCategories(sliderCategories[+index + i])">
                        <div class="contimg center relative">
                          <img :src="sliderCategories[+index + i].img" alt="Food icon">
                          <div class="square" />
                        </div>
                        <span class="h7-em bold">{{sliderCategories[+index + i].title }}</span>
                      </v-card>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>

        <aside class="contcontrols end centermobile">
          <v-btn class="left marginrightmobile" icon @click="ChangeSlidesCategories('prev')">
            <v-icon medium style="color: #A4FDDF !important">mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn class="right marginleftmobile" icon @click="ChangeSlidesCategories('next')">
            <v-icon medium style="color: #A4FDDF !important">mdi-chevron-right</v-icon>
          </v-btn>
        </aside>
      </aside>
    </v-col>

    <v-col class="contdown">
      <h1 class="h4-em divwrap bold">Restaurantes
        <h2 class="h10-em p acenter">Populares</h2>
      </h1>

      <aside class="contslider">
        <v-carousel
          v-model="carouselRestaurant"
          hide-delimiters
          :show-arrows="false"
        >
          <template v-for="(item, index) in sliderRestaurant">
            <v-carousel-item
              v-if="(index + 1) % columnsRestaurant === 1 || columnsRestaurant === 1"
              :key="index"
            > 
              <v-row class="fill-height spacea divpadd">
                <template v-for="(n,i) in columnsRestaurant">
                  <template v-if="(+index + i) < sliderRestaurant.length">
                    <v-col class="contslides relative divcol" :key="i">
                      <aside class="contLike">
                        <v-btn icon class="contimg center absolute"
                          :class="{ contIconActive: sliderRestaurant[+index + i].like,
                            BorderContIconActive: sliderRestaurant[+index + i].like }"
                          @click="SelectLikeRestaurant(sliderRestaurant[+index + i])">
                          <img :src="sliderRestaurant[+index + i].icon" alt="Food icon">
                          <div class="square" />
                        </v-btn>
                      </aside>

                      <img class="images" :src="sliderRestaurant[+index + i].img" alt="Restaurant image">

                      <aside class="divcol">
                        <a :href="sliderRestaurant[+index + i].to" class="h7-em bold">{{sliderRestaurant[+index + i].title }}</a>
                        <p class="h8-em">{{sliderRestaurant[+index + i].desc }}</p>
                      </aside>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>

        <aside class="contcontrols end centermobile">
          <v-btn class="left marginrightmobile" icon @click="ChangeSlidesRestaurant('prev')">
            <v-icon medium style="color: #A4FDDF !important">mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn class="right marginleftmobile" icon @click="ChangeSlidesRestaurant('next')">
            <v-icon medium style="color: #A4FDDF !important">mdi-chevron-right</v-icon>
          </v-btn>
        </aside>
      </aside>
    </v-col>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      carouselCategories: 0,
      sliderCategories: [
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
        {
          img: require("@/assets/icons/pizza-outline.png"),
          title: "Pizzas",
          active: false
        },
      ],
      carouselRestaurant: 0,
      sliderRestaurant: [
        {
          img: require("@/assets/images/r1.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
        {
          img: require("@/assets/images/r2.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "Nodoo",
          desc: "Asiático // Ramen",
          to: "#"
        },
        {
          img: require("@/assets/images/r3.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La casa de Lola",
          desc: "Comida Mediterránea",
          to: "#"
        },
        {
          img: require("@/assets/images/r1.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
        {
          img: require("@/assets/images/r2.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
        {
          img: require("@/assets/images/r3.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
        {
          img: require("@/assets/images/r1.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
        {
          img: require("@/assets/images/r2.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
        {
          img: require("@/assets/images/r3.png"),
          icon: require("@/assets/icons/corazon-outline.png"),
          like: false,
          title: "La Tagliatella",
          desc: "Especialidad en pasta",
          to: "#"
        },
      ]
    }
  },
  computed: {
    columnsCategories() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg && window.innerWidth < 1306) {
        return 3;
      }
      if (this.$vuetify.breakpoint.lg) {
        return 4;
      }

      if (this.$vuetify.breakpoint.md) {
        return 3;
      }

      if (this.$vuetify.breakpoint.sm) {
        return 2;
      }

      return 1;
    },
    columnsRestaurant() {
      if (this.$vuetify.breakpoint.xl) {
        return 3;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 3;
      }

      if (this.$vuetify.breakpoint.sm) {
        return 2;
      }

      return 1;
    }
  },
  methods: {
    ChangeSlidesCategories(item) {
      if (item == "next") {
        this.carouselCategories++
      }
      if (item == "prev") {
        this.carouselCategories--
      }
    },
    SelectCardCategories(item) {
      const icon1 = require("@/assets/icons/pizza-outline.png");
      const icon1Active = require("@/assets/icons/pizza.png");
      this.sliderCategories.forEach(item => {
        item.img = icon1
        item.active = false
      });
      item.img = icon1Active
      item.active = true
    },
    ChangeSlidesRestaurant(item) {
      if (item == "next") {
        this.carouselRestaurant++
      }
      if (item == "prev") {
        this.carouselRestaurant--
      }
    },
    SelectLikeRestaurant(item) {
      item.like = !item.like
      if (item.like == true) {
        item.icon = require("@/assets/icons/corazon.png")
      } else {
        item.icon = require("@/assets/icons/corazon-outline.png")
      }
    }
  },
};
</script>

<style src="./Home.scss" lang="scss" />
