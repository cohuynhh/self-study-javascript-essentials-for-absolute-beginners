fetch("https://api.github.com");

fetch("https://api.github.com").then(a => a.json()).then(j => console.log(j));

fetch("https://api.github.com").then(a => a.json()).then(j => fetch(j.emojis_url)).then(a => a.json()).then(console.log);
