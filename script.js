const notes = [
    "Te amo más de aqui a la luna en pasitos de tortuga 🐢",
    "Cada día contigo vale la pena mi pipsha 🍕",
    "Gracias por ser tú amorcito <3",
    "A tu lado todo es más bonito 💑",
    "Incluso cuando peleamos, sé que quiero estar contigo",
    "Nos vamos a casar, te lo prometo 💍",
    "Me haces muuy feliz :D",
    "Quiero que seas tu 💌 ",
    "Eres mi lugar seguro 🏡",
    "Mis ojos solo brillan contigo amor ✨",
    "Seguimos creciendo juntos 📈",
    "TE AMO GABY 🤍"
];

let current = 0;
const loveNotesDiv = document.getElementById("loveNotes");

function showNextNote() {
    loveNotesDiv.textContent = notes[current];
    current = (current + 1) % notes.length;
}

setInterval(showNextNote, 3000); 
showNextNote(); 
