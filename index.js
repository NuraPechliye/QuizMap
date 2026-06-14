window.addEventListener('load', () =>{
    registerSW()

})

async function registerSW() {
    if ('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        } catch(e) {
            console.log ('Deu erro no Service Worker!')
        }
    }
}

var map = L.map('map').setView([10.575355, 30.523666], 1);


L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
maxZoom: 2,
attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
}).addTo(map); //questao de provedores, esse é o open top map!


var centroafrica = [0, 20]; //as coordenadas, para chamar posteriormente

var primeiroIcon = L.icon({
    iconUrl: 'imagens/icons8-level-1-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24], // aqui ele define a posicao da imagem, a partir das coordenadas definidas
    popupAnchor:  [0, -24]  // mensagem
});

L.marker(centroafrica, { icon: primeiroIcon }).addTo(map).bindPopup("?");


var ameSul = [-20, -55]; 

var segundoIcon = L.icon({
    iconUrl: 'imagens/icons8-2-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24],
    popupAnchor:  [0, -24]  
});
L.marker(ameSul, { icon: segundoIcon }).addTo(map).bindPopup("?");

var ameNorte = [50, -109]; 

var terceiroIcon = L.icon({
    iconUrl: 'imagens/icons8-3-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24],
    popupAnchor:  [0, -24]  
});
L.marker(ameNorte, { icon: terceiroIcon }).addTo(map).bindPopup("?");

var europa = [55, 40]; 

var quartoIcon = L.icon({
    iconUrl: 'imagens/icons8-4-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24],
    popupAnchor:  [0, -24]  
});
L.marker(europa, { icon: quartoIcon }).addTo(map).bindPopup("?");

var asia = [55, 90]; 

var quintoIcon = L.icon({
    iconUrl: 'imagens/icons8-5-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24],
    popupAnchor:  [0, -24]  
});
L.marker(asia, { icon: quintoIcon }).addTo(map).bindPopup("?");

var oceania = [-27, 130]; 

var sextoIcon = L.icon({
    iconUrl: 'imagens/icons8-6-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24],
    popupAnchor:  [0, -24]  
});
L.marker(oceania, { icon: sextoIcon }).addTo(map).bindPopup("?");

var antartica = [-70, 60]; 

var setimoIcon = L.icon({
    iconUrl: 'imagens/icons8-7-48.png',
    iconSize:     [48, 48],
    iconAnchor:   [24, 24],
    popupAnchor:  [0, -24]  
});
L.marker(antartica, { icon: setimoIcon }).addTo(map).bindPopup("?");

