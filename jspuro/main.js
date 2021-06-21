//escondendo as variaveis
(() => {
  const btnNome = document.getElementById("btn-nome");
  const perfil = document.querySelector("#sec-1 .perfil");
  const repositorios = document.querySelector("#sec-1 .repositorios");
  const url = "https://api.github.com/users";
  const client_id = "162becdafabba89ae9c3";
  const client_secrets = "f40c9539739c4d685246f4122ad1d393ce81f64f";
  const qPage = 7;
  const sort = "created: asc";

  async function getUser(user) {
    //requisição do perfil
    const profileResponse = await fetch(
      `${url}/${user}?cliente_id=${client_id}&client_secret=${client_secrets}`
    );
    //requisição do repositorio
    const repoResponse = await fetch(
      `${url}/${user}/repos?per_page=${qPage}&sort=${sort}&client_id=${client_id}&client_secret=${client_secrets}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos };
  }
  function showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      console.log(repo);
      output += `
        <div class="itens">
            <div>
                <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="res">
                <p>start:${repo.stargazers_count}</p>
                <p>watch:${repo.watchers_count}</p>
                <p>fork:${repo.forks_count}</p>
            </div>
        </div>
        
        `;
    });
    repositorios.innerHTML = output;
  }
  function showProfile(user) {
    perfil.innerHTML = `
        <img src="${user.avatar_url}" alt="imagem do ${user.name}" />
        <p>Repositorios: ${user.public_repos}</p>
        <p>Seguidores: ${user.followers}</p>
        <p>Seguindo: ${user.following}</p>
        <div>
            <a href="${user.html_url}">ver Perfil no github</a>
        </div>
    `;
  }
  btnNome.addEventListener("keyup", (e) => {
    const user = e.target.value;
    if (user.length > 1)
      getUser(user).then((res) => {
        showProfile(res.profile);
        showRepos(res.repos);
      });
  });
})();
