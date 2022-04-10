<template>
  <section id="menuHeader">
    <!-- menu header -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      activator=".openMenuHeader"
    >
      <v-list color="transparent" class="containerMenuHeader">
        <section class="cardMenuHeader colorCartas">
          <v-list-item
            class="cardItems"
            v-for="(item, i) in dataMenuHeader"
            :key="i"
            :href="item.link"
          >
            <v-list-item-title>
              <aside class="divrow space">
                <!-- <div class="divrow center" style="gap: 10px">
                  <v-icon large>{{ item.icon }}</v-icon>
                  <a :href="item.link" class="h8-em" style="font-weight: 600">
                    {{ item.title }}
                  </a>
                </div>
                <v-icon medium>mdi-chevron-right</v-icon> -->
              </aside>
            </v-list-item-title>
          </v-list-item>
        </section>
      </v-list>
    </v-menu>

    <!-- menu collections -->
    <v-dialog
      id="dialogo"
      v-model="dialog"
      max-width="832.49px"
      :overlay-opacity="overlay_opacity"
      :overlay-color="overlay_color"
      activator=".openMenuCollections"
    >
    <section class="colorCartas">
      </section>
    </v-dialog>

  </section>
</template>

<script>
export default {
  name: "HeaderMenu",
  i18n: require("./i18n"),
  computed: {
    headers() {
      return [
        {
          sortable: false,
          value: "title",
        },
      ];
    },
  },
  data() {
    return {
      dialog: false,
      overlay_opacity: "0.2",
      overlay_color: "white",
      search: '',
      filter: [
        'foo', 'bar', 'fizz', 'buzz'
      ],
    };
  },
  created() {
    const theme = localStorage.getItem("theme");
    this.OverlayMethod(theme);
  },
  methods: {
    OverlayMethod(theme) {
      if (theme == "dark") {
        this.overlay_opacity = "0.5";
        this.overlay_color = "black"
      }
      if (theme == "light") {
        this.overlay_opacity = "0.2";
        this.overlay_color = "white"
      }
    },
  },
};
</script>

<style src="./layout.scss" lang="scss"></style>
