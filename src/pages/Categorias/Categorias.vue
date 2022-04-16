<template>
  <section id="categorias" class="parent">
    <v-col class="contup relative divrow">
      <!-- <aside class="conttag jcenter divcol">
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
      </aside> -->
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
    }
  },
  computed: {
    columnsCategories() {
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
  },
};
</script>

<style src="./Categorias.scss" lang="scss" />
