<template>
  <div id="app">
    <header>
      <div>
        <h1>Pesquise usuário do github</h1>
        <input
          @keyup="getUser"
          type="text"
          name=""
          id="btn-nome"
          placeholder="digite o nome do usuário"
        />
      </div>
    </header>
    <section id="sec-1">
      <div class="box-sec1">
        <div class="perfil" v-if="user.length !== 0">
          <profile :user="user" />
        </div>
        <div class="repositorios">
          <!--v-for="repo in repos" loop com o array repos e joga no repo. -->
          <!--:repo="repo"  pega a repo(props) que esta dentro do componente Repo e renderiza com o que vai sair do loop repo-->
          <repo v-for="repo in repos" :key="repo" :repo="repo" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Profile from "./components/Profile.vue";
import Repo from "./components/Repo.vue";
export default {
  name: "App",
  components: {
    Profile,
    Repo,
  },
  data() {
    return {
      github: {
        url: "https://api.github.com/users",
        client_id: "162becdafabba89ae9c3",
        client_secrets: "f40c9539739c4d685246f4122ad1d393ce81f64f",
        qPage: 100,
        sort: "created: asc",
      },
      user: [],
      repos: [],
    };
  },
  methods: {
    getUser(ev) {
      const user = ev.target.value;
      const { url, client_id, client_secrets, qPage, sort } = this.github;
      axios
        .get(
          `${url}/${user}?cliente_id=${client_id}&client_secret=${client_secrets}`
        )
        .then(({ data }) => (this.user = data));
      axios
        .get(
          `${url}/${user}/repos?per_page=${qPage}&sort=${sort}&client_id=${client_id}&client_secret=${client_secrets}`
        )
        .then(({ data }) => (this.repos = data));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
/* geral */
nav div,
header div,
section .box-sec1 {
  width: 80%;
  margin: auto;
}
/* header */
header {
  margin: 20px 0;
}
header input {
  margin: 30px 0;
  height: 30px;
  width: 300px;
  padding: 0 15px;
}
/* sessao 1 */
.box-sec1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
