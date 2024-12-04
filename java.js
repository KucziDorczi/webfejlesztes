
const cocktailImages = {
    eper: "pinkkoktel.png",
    citrom: "sargakoktel.png",
    narancs: "narancskoktel.png",
    afonya: "kekkoktel.png"
};

document.getElementById("koktelurlap").addEventListener("submit", generator)


function generator(event){
    event.preventDefault(); 

    const szirup = document.getElementById("szirup").value;

    const selectedImage = cocktailImages[szirup];

    const resultDiv = document.getElementById("cocktailResult");
    resultDiv.innerHTML = `<h2>Neked ajánlott koktél:</h2>
                           <img src="kepek/${selectedImage}" alt="Koktél kép">`;
};



const korcsuszka = document.getElementById('kor');
const korertek = document.getElementById('korertek');

korertek.textContent = korcsuszka.value; 

korcsuszka.addEventListener('input', function () {
    korertek.textContent = korcsuszka.value;
});



/*
var van = false
function megjeleno_kep() { 
    if (van = false) {document.getElementById("popup-kep").style.display = "block"; van = !van}
    else {document.getElementById("popup-kep").style.display = "none"; van = !van}
}
*/


$(document).ready(function () {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        fade: true, 
        cssEase: 'linear', 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            }
        ]
    });
});

















    // Életkor (range slider) frissítés
    const korCsuszka = $("#kor");
    const korErtek = $("#korertek");

    korErtek.text(korCsuszka.val()); // Alapértelmezett érték

    korCsuszka.on("input", function () {
        korErtek.text($(this).val());
    });


