<template>
  <div class="itens">
    <div>
      <a :href="repo.html_url">{{ repo.name }}</a>
    </div>
    <div class="res">
      <p>start:{{ repo.stargazers_count }}</p>
      <p>watch:{{ repo.watchers_count }}</p>
      <p>fork:{{ repo.forks_count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repo"],
};
</script>

<style>
/* sessao 1 repositorios */

.repositorios {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 370px;
  padding: 5px 30px;
  margin-top: 30px;
  overflow: auto;
}
.repositorios .itens {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border: solid 1px rgb(209, 209, 209);
}
.repositorios .itens div {
  margin: 0 10px;
}
.repositorios .itens .res {
  display: flex;
}
.repositorios .itens a {
  text-decoration: none;
}
.repositorios .itens a:hover {
  text-decoration: underline;
}
.repositorios .itens div:first-child {
  color: blue;
}
.repositorios .res p {
  margin: 0 5px;
  background-color: blue;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 700;
  color: rgb(146, 142, 142);
}
.repositorios .res p:first-child {
  background-color: green;
}
.repositorios .res p:last-child {
  background-color: yellow;
  color: black;
}
</style>
