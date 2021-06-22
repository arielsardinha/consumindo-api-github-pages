//escondendo as variaveis
(() => {
  const btnNome = document.getElementById("btn-nome");
  const perfil = document.querySelector("#sec-1 .perfil");
  const repositorios = document.querySelector("#sec-1 .repositorios");
  const url = "https://api.github.com/users";
  const client_id = "162becdafabba89ae9c3";
  const client_secrets = "f40c9539739c4d685246f4122ad1d393ce81f64f";
  const qPage = 100;
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
            <a href="${repo.html_url}">${repo.name}</a>
            <p>${repo.description}</p>
            <div>
              <i class="bi bi-star"></i>
            </div>
          </div>
        `;
    });
    repositorios.innerHTML = output;
  }
  function showProfile(user) {
    perfil.innerHTML = `
        <img src="${user.avatar_url}" alt="" />
          <div>
            <a href="${user.html_url}"><h3>${user.name}</h3></a>
            <p>${user.login}</p>
          </div>
          <div class="txt">
            <div>
              <i class="bi bi-briefcase"></i>
              <p>${user.company}</p>
            </div>
            <div>
              <i class="bi bi-geo"></i>
              <p>${user.location}</p>
            </div>
            <div>
              <i class="bi bi-star"></i>
              <p></p>
            </div>
            <div>
              <i class="bi bi-archive"></i>
              <p>${user.public_repos}</p>
            </div>
            <div>
              <i class="bi bi-diagram-2"></i>
              <p>${user.followers}</p>
            </div>
          </div>
    `;
  }
  btnNome.addEventListener("keyup", (e) => {
    const user = e.target.value;
    getUser(user).then((res) => {
      showProfile(res.profile);
      showRepos(res.repos);
    });
  });
})();
