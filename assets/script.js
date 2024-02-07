const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slide_index = 0 ;

function majSlide(){
	let slideImage = document.getElementById("banner").querySelector("img");
	let slideText = document.getElementById("banner").querySelector("p");
	slideImage.setAttribute("src", "./assets/images/slideshow/"+slides[slide_index].image)
	slideText.innerHTML = slides[slide_index].tagLine;
};

function maj_Index(value){
	document.getElementById("banner").querySelector(".slide_"+slide_index).classList.remove("dot_selected");
	slide_index = (slide_index + value + slides.length) % slides.length;
	console.log(slide_index);
	document.getElementById("banner").querySelector(".slide_"+slide_index).classList.add("dot_selected");
	majSlide();
}

let carouselFlecheGauche = document.querySelector("#banner .arrow_left");
carouselFlecheGauche.addEventListener("click", function() {
	maj_Index(-1);
});

let carouselFlecheDroite = document.querySelector("#banner .arrow_right");
carouselFlecheDroite.addEventListener("click", function() {
	// Affichez "Tralalla" dans la console lorsque le bouton droit est cliqué
	maj_Index(1)
});

slides.forEach((element, index) => {
	let dots = document.createElement("div");
	dots.classList.add("slide_"+index, "dot");
	//dots.classList.add("dot_selected"); //rend le point actif.
	let parentsDots = document.getElementById("banner").querySelector(".dots");
	parentsDots.appendChild(dots);
});
document.getElementById("banner").querySelector(".slide_0").classList.add("dot_selected"); // 
