//Displaying github repos by using Github API

var fetchUrl = require("fetch").fetchUrl;
function fetchGithubRepos(username) {
    let repos;
    const repo_url = `https://api.github.com/users/${username}/repos`;
    fetchUrl(repo_url, function (error, meta, body) {
        repos = JSON.parse(body.toString());
        const listItemsHTML = repos.map((repo) => {
            return `<li>
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </li>`
        });
        var listItemsHTML1 = repos.map(function (repo) {
            return `<div id="github-repos">
            <p>
                <strong>Other Projects:</strong>
            </p>
            <ul>
                ${listItemsHTML}
            </ul>
        </div>`;
        });
        console.log(listItemsHTML);
        console.log(listItemsHTML1);
    });
   
}
fetchGithubRepos('deye9');

$(document).ready(function () {
        $(listItemsHTML).appendTo("github-repos");
    });
