<template>
  <div>
    <img :src="user.avatar_url" alt="" />
    <p>Repositorios:{{ user.public_repos }}</p>
    <p>Seguidores:{{ user.followers }}</p>
    <p>Seguindo:{{ user.following }}</p>
    <div>
      <a :href="user.html_url">ver Perfil no github</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
/* sessao 1 perfil */
.perfil img {
  width: 200px;
}
.perfil p {
  padding: 20px 0;
}
.perfil a {
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 10px 40px;
  font-size: 20px;
  border-radius: 5px;
}
.perfil div {
  margin-top: 10px;
  text-align: center;
}
.perfil a:hover {
  box-shadow: 0 0 2px black;
  background-color: rgb(56, 56, 56);
}
</style>
