const content = {
    fr: {
        title: "Un univers sucré entre créativité et excellence",
        t1: "Aminedep est un chef pâtissier avec 5 ans d’expérience.",
        t2: "Son parcours associe sciences physiques, finance et formation en pâtisserie.",
        t3: "Il développe aujourd’hui un nouveau concept de pâtisserie moderne."
    },
    en: {
        title: "A sweet world between creativity and excellence",
        t1: "Aminedep is a pastry chef with 5 years of experience.",
        t2: "His background combines science, finance and pastry training.",
        t3: "He is developing a new modern pastry concept."
    }
};

function setLang(lang) {
    document.getElementById("title-home").innerText = content[lang].title;
    document.getElementById("text-home-1").innerText = content[lang].t1;
    document.getElementById("text-home-2").innerText = content[lang].t2;
    document.getElementById("text-home-3").innerText = content[lang].t3;
}

setLang("fr");
