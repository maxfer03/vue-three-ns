<template>
  <div class="proj-showcase">
    <div class="carousell">
      <button class="carousell-btns btn-back" @click="prev">{{ "<" }}</button>
      <div class="carousell-content">
        <img
          v-if="projects[index].img"
          :alt="projects[index].title + ' image'"
          class="carousell-img"
          :src="projects[index].img"
        />

        <div class="carousell-content-text">
          <h3>{{ projects[index].title }}</h3>
          <h4>
            <span v-for="(tech, i) in projects[index].techs" :key="i">
              {{ tech }}{{ i === projects[index].techs.length - 1 ? "" : ", " }}
            </span>
          </h4>
          <p>
            {{ projects[index].desc }}
          </p>
          <a v-if="projects[index].url" :href="projects[index].url">{{
            projects[index].urlText
          }}</a>
          <span v-else>{{ projects[index].urlText }}</span>
        </div>
      </div>
      <button class="carousell-btns btn-next" @click="next">{{ ">" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "My first Project",
          desc: `
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo esse exercitationem natus in eligendi fugiat fugit beatae perspiciatis! Animi!
    `,
          techs: ["PostgreSQL", "React", "Redux", "Node"],
          urlText: "Github",
          url: "https://github.com/maxfer03/solana-digital-nomads",
          img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
        },
        {
          title: "My Second Project",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus expedita et, atque hic molestias consequuntur minima voluptatibus animi similique debitis fuga quos itaque nobis voluptas facere totam velit? Quas minus consequatur at dignissimos doloremque distinctio a soluta itaque qui.
`,
          techs: ["Vue", "Vuex"],
          urlText: "Github",
          url: "https://github.com/maxfer03/solana-digital-nomads",
          img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
        },
        {
          title: "My Third Project",
          desc: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugit hic? Mollitia repellat dolorum nulla.
 `,
          techs: ["React", "Rust", "Anchor", "Web3.js"],
          urlText: "Github",
          url: "https://github.com/maxfer03/solana-digital-nomads",
          img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
        },
      ],
      index: 0,
    };
  },
  methods: {
    async next() {
      if (this.projects.length - 1 === this.index) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    async prev() {
      if (this.index === 0) {
        this.index = this.projects.length - 1;
      } else {
        this.index--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.proj-showcase {
  background: $container-bg;
  padding: 20px 10px;
  border-radius: 5px;
  .carousell {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      margin: 0px 20px;
      flex: 1 1 0px;
      img {
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 400px;
        border-radius: 5px;
      }
      &-text {
        h3 {
          color: $active-link;
          margin: 10px 0px;
        }
      }
    }
  }
}
</style>