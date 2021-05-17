/* Selectam ce vrem sa modificam/folosim si le declaram in variabile */
var css = document.querySelector("h3"); /*          folosim querySelector() care returneaza primul "h3" gasit , 
                                                    daca dorim alt 'h3' folosim [0,1...] dupa ("h3") pentru ca 
                                                    document.querySelector() se comporta ca un 'array' 
                                                    cand sunt mai multe tag-uri de tip h3 */

var firstColor = document.querySelector(".firstColor"); /* Folosim clasa pentru a selecta <input> - ul dorit  */

var secondColor = document.querySelector(".secondColor");  /* Folosim clasa pentru a selecta <input> - ul dorit  */

 var body = document.getElementById("gradient");    /* Folosim "id"-ul  pentru a selecta "body"  */

 /* Declaram functia setGradient()  - care o sa ne ajute la inlocuirea background-ului */
function setGradient() {
	body.style.background =                             /* 'body' - care este defapt variabila = document.getElementById("gradient")
                                                      
                                                       
                                                         este ca si cum s-ar adauga la <body id="gradient"> 
                                                         si ar deveni <body id="gradient" background=" urmatoarele valori">        
                                                        */
	"linear-gradient(to right, " 
	+ firstColor.value      /* folosim valoarea input-ului prin selectarea culorii cu mouse-ul */
	+ ", " 
	+ secondColor.value     /* folosim valoarea input-ului prin selectarea culorii cu mouse-ul */
	+ ")";

	css.textContent = body.style.background + ";"; /* adauga textul  la variabila (css = in cazul nostru intre <h3></h3>) */
}

firstColor.addEventListener("input", setGradient); /* folosim metoda .addEventListener care deterima cum sa reactioneze 
                                                    javascript in functie de un event (in cazul nostru input) .
                                                    Alegem sa foloseasca functia setGradient(). care este declarata mai sus
                                                     */

secondColor.addEventListener("input", setGradient);

/*  Observam ca intai se intampla EVENT-ul adica "input" si dupa se executa functia datorita eventului 
Pana nu se selecteaza o culoare , nu apare  css.textContent (de ex : linear-gradient(to right, rgb(89, 105, 89), rgb(17, 85, 17));
  in h3 adica sub CODUL CSS PENTRU ACEST BACKGROUND pentru ca event-ul (input type="color" - face ca functia sa se execute)
*/