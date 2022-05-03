<template>
  <section id="tienda" class="parent">
    <v-col class="contup astart">
      <img src="@/assets/images/tienda-title.png" alt="Titulo tienda">
      <div class="center">
        <v-btn id="add" icon>+</v-btn>
        <label class="semibold h6-em" for="add">agregar menu</label>
      </div>
    </v-col>

    <v-col class="contdown">
      <aside class="wrapper divcol">
        <h2 class="h3-em tcenter">Menu</h2>
        <v-col class="divcol gap">
          <v-card v-for="(item,i) in dataMenuTienda" :key="i"
            style="display:flex" class="acenter spacea">
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

            <aside class="divrow">
              <v-btn>
                editar
              </v-btn>
              <v-btn text color="#ff4081" rounded>
                borrar
              </v-btn>
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
