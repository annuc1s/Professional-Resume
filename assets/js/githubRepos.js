//Displaying github repos by using Github API
function fetchGithubRepos(username) {
    const repo_url = `https://api.github.com/users/${username}/repos`;
    fetch(repo_url)
        .then((response) => {
            return response.json();
        })
        .then((repos) => {
            repos.map((repo) => {
                $(`<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`).appendTo("#githubrepos");
            });
        });
}

fetchGithubRepos('annuc1s');