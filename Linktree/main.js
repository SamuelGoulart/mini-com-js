'mode strict'

const links = {
    "nome": "SENAI",
    "img": "https://avatars.githubusercontent.com/u/62961331?s=460&u=0981e8567818c1952a1015ce17c311cb57b40380&v=4",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "http://www.fernandoleonid.com.br/"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/fernandoleonid"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/samuelgoulart/"
        },
        {
            "titulo": "Git hub",
            "url": "https://github.com/SamuelGoulart"
        }
    ]
}


avatar.src = (links['img']);
titulo.textContent = (links['nome']);

const url = links.links.map(({ url }) => url);
const titulotree = links.links.map(({ titulo }) => titulo);

for (let i = 0; i < url.length; i++) {
    const linkstree = document.createElement("a");
          linkstree.setAttribute('class', 'link');
          linkstree.setAttribute('href', url[i]);
          linkstree.textContent = (titulotree[i]);
          linkTree.appendChild(linkstree);

}



