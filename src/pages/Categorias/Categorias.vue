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
  name: "Categorias",
  data() {
    return {
    }
  },
  mounted() {
    this.$parent.$parent.$parent.$refs.navbar.to('categorias')
  },
  methods: {
  },
};
</script>

<style src="./Categorias.scss" lang="scss" />
