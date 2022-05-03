<template>
  <section id="tienda" class="parent">
    <v-col class="contup astart">
      <img src="@/assets/images/tienda-title.png" alt="Titulo tienda">

      <v-tooltip right color="var(--clr-btn)">
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="add" icon v-bind="attrs" v-on="on" href="#/mi-tienda">
            <img src="@/assets/icons/pencil.png" alt="Add Menu">
          </v-btn>
        </template>
        <span class="clr-text-btn">Editar datos de tienda</span>
      </v-tooltip>
    </v-col>

    <v-col class="contdown">
      <aside class="wrapper divcol">
        <h2 class="h3-em tcenter">Menu</h2>
        <v-col class="divcol gap">
          <v-card v-for="(item,i) in dataMenuTienda" :key="i"
            style="display:flex" class="acenter">
            <aside class="divrow">
              <img src="@/assets/icons/inicio.png" alt="Menu Image">

              <div class="contInfo divcol jcenter">
                <label class="h4-em">{{ item.nombre }}</label>
                <div class="space">
                  <span class="h6-em semibold">{{ item.categoria }}</span>
                  <span class="h6-em semibol">{{ item.precio }}$</span>
                </div>
              </div>
            </aside>
          </v-card>
        </v-col>
      </aside>
    </v-col>
  </section>
</template>

<script>
export default {
  name: "Tienda",
  data() {
    return {
      dataMenuTienda: [
        {
          nombre: "herian",
          categoria: "css",
          precio: "1000"
        },
        {
          nombre: "cesar",
          categoria: "django",
          precio: "1000"
        },
        {
          nombre: "angel",
          categoria: "django",
          precio: "1000"
        },
        {
          nombre: "herian",
          categoria: "css",
          precio: "1000"
        },
        {
          nombre: "cesar",
          categoria: "django",
          precio: "1000"
        },
        {
          nombre: "angel",
          categoria: "django",
          precio: "1000"
        },
      ]
    }
  },
  methods: {
  },
};
</script>

<style src="./Tienda.scss" lang="scss" />
