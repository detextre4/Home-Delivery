<template>
  <section id="restaurante-tienda" class="parent">
    <v-col class="contup">
      <section class="contbanner jspace">
        <v-img
          src="@/assets/test.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <aside class="backBtn">
            <v-btn icon @click="$router.push('/restaurantes')" :ripple="false">
              <v-icon class="not-clr">mdi-chevron-left</v-icon>
            </v-btn>
          </aside>
          <span class="h8-em">horario</span>

          <v-card-title class="h3-em bold">
            nombre
          </v-card-title>

          <v-card-text class="h8-em">
            descripcion
          </v-card-text>
        </v-img>

        <aside class="contmapa divcol jend">
          <div class="divcol">
            <label class="h7-em">dirección</label>
            <span class="h9-em">dirección url o lo que sea que quieras poner</span>
          </div>

          <GoogleMap></GoogleMap>
        </aside>
      </section>
    </v-col>

    <v-col class="contdown divcol">
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
          <v-icon size="2.5em" color="var(--clr-text-btn)" class="not-clr">mdi-filter</v-icon>
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

      <section class="contRestaurantList">
        <v-card v-for="(item,i) in dataRestaurant" :key="i"
          class="card divcol align" style="display:flex">
          <img class="images" :src="item.img" alt="Restaurant image">

          <aside class="contcard space">
            <a class="h7-em bold" @click="ToTienda(item)">{{item.desc}}</a>

            <div class="contPrice divcol tend">
              <div class="acenter">
                <img class="logoNear" src="@/assets/logos/near.png" alt="near">
                <span class="price normal">{{item.near}}</span>
              </div>
              <span class="not-clr">(${{item.dollar}})</span>
            </div>
          </aside>
        </v-card>
      </section>
    </v-col>
  </section>
</template>

<script>
import GoogleMap from '@/components/GoogleMap/GoogleMap'
export default {
  name: "restauranteTienda",
  components: {
    GoogleMap
  },
  data() {
    return {
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
          desc: "descripcion",
          near: "1",
          dollar: "23"
        },
        {
          img: require("@/assets/test.jpg"),
          desc: "descripcion",
          near: "2",
          dollar: "44"
        },
        {
          img: require("@/assets/test.jpg"),
          desc: "descripcion",
          near: "2",
          dollar: "44"
        },
        {
          img: require("@/assets/test.jpg"),
          desc: "descripcion",
          near: "2",
          dollar: "44"
        },
        {
          img: require("@/assets/test.jpg"),
          desc: "descripcion",
          near: "2",
          dollar: "44"
        },
      ]
    }
  },
  methods: {
  },
};
</script>

<style src="./Restaurantes.scss" lang="scss" />
