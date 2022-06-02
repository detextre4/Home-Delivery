<template>
  <section id="restaurantes" class="parent relative">
    <v-col class="contup relative divcol">
      <aside class="conttag jcenter divcol">
        <h1 class="h7_em">Restaurantes</h1>
      </aside>

      <aside class="contFilters divwrap acenter">
        <v-btn text class="searchBtn semibold">
          filtrar
        </v-btn>

        <v-text-field
          prepend-inner-icon="mdi-magnify"
          solo
          hide-details
          class="search"
        ></v-text-field>

        <v-btn class="filtro">
          <v-icon size="2.5em" color="var(--clr-text-btn)" class="not_clr">mdi-filter</v-icon>
        </v-btn>

        <v-select
          v-model="filters.filterName.title"
          :items="filters.filterName.by"
          solo
          hide-details
          class="select relative"
        >
          <template v-slot:selection="slotProps">
            <div class="select_label">por</div>
            <span>{{slotProps.item}}</span>
          </template>
        </v-select>

        <v-select
          v-model="filters.filterExcluir.title"
          :items="filters.filterExcluir.by"
          label="excluir"
          solo
          hide-details
          multiple
          class="select"
        >
          <template v-slot:selection="{item, index}">
            <div class="select_label">excluir</div>
            <v-chip color="#FFFFFF" v-if="index === 0">
              <span>{{item}}</span>
            </v-chip>
            <span
              v-if="index === 1"
              class="black--text text-caption"
            >
              (+{{ filters.filterExcluir.title.length - 1 }})
            </span>
          </template>
        </v-select>

        <v-select
          :items="filters.filterIncluir.by"
          label="incluir"
          solo
          hide-details
          multiple
          class="select"
        >
          <template v-slot:selection="{item, index}">
            <div class="select_label">incluir</div>
            <v-chip color="#FFFFFF" v-if="index === 0">
              <span>{{item}}</span>
            </v-chip>
            <span
              v-if="index === 1"
              class="black--text text-caption"
            >
              (+{{ filters.filterIncluir.title.length - 1 }})
            </span>
          </template>
        </v-select>
      </aside>
    </v-col>

    <v-col class="contdown">
      <section class="contRestaurantList">
        <v-card v-for="(item,i) in dataRestaurant" :key="i"
          class="card divcol" v-ripple="activeRipple?{class: 'activeRipple'}:''">
          <img class="images" :src="item.img" alt="Restaurant image">

          <aside class="contcard space">
            <a class="h10_em bold" @click="ToTienda(item)"
              @mouseover="activeRipple=true" @mouseleave="activeRipple=false">
              {{item.title}}
            </a>
            <span class="normal tend">{{item.hours}}</span>
          </aside>
        </v-card>
      </section>
    </v-col>
  </section>
</template>

<script>
export default {
  name: "restaurantes",
  data() {
    return {
      activeRipple: false,
      filters: {
        filterName: {
          title: "nombre",
          by: ["nombre", "autor"]
        },
        filterExcluir: {
          title: [],
          by: ["blabla", "algoalgo"]
        },
        filterIncluir: {
          title: [],
          by: ["blabla", "algoalgo"]
        },
      },
      dataRestaurant: [
        {
          img: require("@/assets/test.jpg"),
          title: "titulo",
          hours: "horario",
        },
        {
          img: require("@/assets/test.jpg"),
          title: "titulo",
          hours: "horario",
        },
        {
          img: require("@/assets/test.jpg"),
          title: "titulo",
          hours: "horario",
        },
        {
          img: require("@/assets/test.jpg"),
          title: "titulo",
          hours: "horario",
        },
        {
          img: require("@/assets/test.jpg"),
          title: "titulo",
          hours: "horario",
        },
        {
          img: require("@/assets/test.jpg"),
          title: "titulo",
          hours: "horario",
        },
      ]
    }
  },
  methods: {
    ToTienda(item) {
      console.log(item)
      this.$router.push({path: '/restaurante-tienda'})
    }
  },
};
</script>

<style src="./Restaurantes.scss" lang="scss" />
