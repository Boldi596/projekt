  const response = await fetch('../CONTENT/termekek.json');
  const termekek = await response.json();

  const template = document.querySelector(".col-md-auto.card");
  const termekContainer = document.querySelector(".termekek");
  termekContainer.innerHTML = ""; // törli az eredeti egy példányt

  termekek.forEach(termek => {
    if (!termek.nev) return; // kihagyjuk az üres objektumokat

    const clone = template.cloneNode(true);
    clone.querySelector(".nev").textContent = termek.nev;
    clone.querySelector(".ido").textContent = termek.ido || "N/A";
    clone.querySelector(".fonal").textContent = termek.fonal || "N/A";
    clone.querySelector(".tomoanyag").textContent = termek.tomoanyag || "N/A";
    clone.querySelector(".suly").textContent = termek.suly || "N/A";
    clone.querySelector(".kiegeszito").textContent = termek.kiegeszito || "N/A";
    clone.querySelector(".kep").src = termek.kep;

    termekContainer.appendChild(clone);
  })


  // Ha az utolsó sor nem teljes (pl. 1 vagy 2 elem 3 helyre), adjunk hozzá dummy kártyát
  const termekekSzam = termekek.filter(t => t.nev).length;
const oszlopSzam = Math.floor(termekContainer.offsetWidth / 320); // kb. 320px egy kártya szélesség paddal
const hianyzoKartyakSzama = oszlopSzam - (termekekSzam % oszlopSzam || oszlopSzam);

for (let i = 0; i < hianyzoKartyakSzama && hianyzoKartyakSzama !== oszlopSzam; i++) {
    const dummy = document.createElement("div");
    dummy.className = "col-md-auto card invisible"; // 'invisible' osztálytól láthatatlan lesz
    dummy.style.width = "20rem";
    termekContainer.appendChild(dummy);
}