import { Circulo, Triangulo, Cuadrado, Rectangulo, Esfera, Rombo, Trapecio, Cilindro, Cono, Cubo, Paralelepipedo } from "./figura.js";

const location = window.location.pathname;
const directoryPath = location.substring(0, location.lastIndexOf("/") + 1);
// console.log(directoryPath);

let tria = new Triangulo(4, 2, 2);
let cuad = new Cuadrado(2);
let rect = new Rectangulo(2, 3);
let trape = new Trapecio(5,3,2);
let rombo = new Rombo(4,6);
let circ = new Circulo(5);

//  PLOT
tria.plotfig(5)
cuad.plotfig(2)
rect.plotfig(3)
trape.plotfig(5)
rombo.plotfig(7)
circ.plotfig(10)


//  Solid
let esfe = new Esfera(1);
let cili = new Cilindro(1,1);
let cono = new Cono(1,1);
let cubo = new Cubo(4);
let parale = new Paralelepipedo(2,3,2);

// PLOT
esfe.plotfig(3)
cili.plotfig(3)
cono.plotfig(3)
cubo.plotfig(10)
parale.plotfig(10)


//  DATA html  

let tri = document.getElementById("tridat");
tri.innerHTML = tria.messageP();

let cua = document.getElementById("cuaddat");
cua.innerHTML = cuad.messageP();

let recta = document.getElementById("rectdat");
recta.innerHTML = rect.messageP();

let tra = document.getElementById("trapdat");
tra.innerHTML = trape.messageP();

let rom = document.getElementById("romdat");
rom.innerHTML = rombo.messageP();

let circle = document.getElementById("circdat");
circle.innerHTML = circ.messageP();

let esfera = document.getElementById("esfedat");
esfera.innerHTML = esfe.messageV();

let cilinder = document.getElementById("cilidat");
cilinder.innerHTML = cili.messageV();

let cone = document.getElementById("conodat");
cone.innerHTML = cono.messageV();

let cubbo = document.getElementById("cubodat");
cubbo.innerHTML = cubo.messageV();

let paralele = document.getElementById("paraledat");
paralele.innerHTML = parale.messageV();



//  Get data buttoms
let ButtonT = document.getElementById("enterT");

ButtonT.addEventListener("click", () => {
  let At = document.getElementById("triA").value;
  let Bt = document.getElementById("triB").value;
  let Ht = document.getElementById("triH").value;
  let tria = new Triangulo(At, Bt, Ht);
  alert(`Datos ${tria.name} update:`);
  tri.innerHTML = tria.messageP();
  tria.plotfig(4)
});
let ButtonC = document.getElementById("enterC");
ButtonC.addEventListener("click", () => {

  let cuadL = document.getElementById("cuadA").value;
  let cuad = new Cuadrado(cuadL);
  alert(`Datos ${cuad.name} update:`);
  cuad.plotfig(parseFloat(cuadL))

});

let ButtonR = document.getElementById("enterR");
ButtonR.addEventListener("click", () => {
 
  let rectA = document.getElementById("rectA").value;
  let rectB = document.getElementById("rectB").value;
  let rect = new Rectangulo(rectA,rectB);
  alert(`Datos ${rect.name} update:`);
  recta.innerHTML = rect.messageP();
  rect.plotfig(parseFloat(rectA))

});

let ButtonTr = document.getElementById("enterTrap");
ButtonTr.addEventListener("click", () => {
 
  let B = document.getElementById("trapB").value;
  let b = document.getElementById("trapb").value;
  let h = document.getElementById("traph").value;
  let trape = new Trapecio(B,b,h);
  alert(`Datos ${trape.name} update:`);
  tra.innerHTML = trape.messageP();
  trape.plotfig(parseFloat(B))

});
let ButtonRom = document.getElementById("enterRomb");
ButtonRom.addEventListener("click", () => {
 
  let D = document.getElementById("romD").value;
  let d = document.getElementById("romd").value;
  let rombo = new Rombo(D,d);
  alert(`Datos ${rombo.name} update:`);
  rom.innerHTML = rombo.messageP();
  rombo.plotfig(parseFloat(rectA))

});
let ButtonCir = document.getElementById("enterCirc");
ButtonCir.addEventListener("click", () => {
 
  let r = document.getElementById("circR").value;
  let circ = new Circulo(r);
  alert(`Datos ${circ.name} update:`);
  circle.innerHTML = circ.messageP();
  circ.plotfig(parseFloat(r))

});
let ButtonEsfe = document.getElementById("enterEsfeR");
ButtonEsfe.addEventListener("click", () => {
 
  let r = document.getElementById("esfeR").value;
  let esfe = new Esfera(r);
  alert(`Datos ${esfe.name} update:`);
  esfera.innerHTML = esfe.messageV();
  esfe.plotfig(parseFloat(r))

});

let ButtonCili = document.getElementById("enterCili");
ButtonCili.addEventListener("click", () => {
 
  let r = document.getElementById("ciliR").value;
  let h = document.getElementById("ciliH").value;
  let cili = new Cilindro(r,h);
  alert(`Datos ${cili.name} update:`);
  cilinder.innerHTML = cili.messageV();
  cili.plotfig(parseFloat(r))

});

let ButtonCono = document.getElementById("enterCono");
ButtonCono.addEventListener("click", () => {
 
  let r = document.getElementById("conoR").value;
  let h = document.getElementById("conoH").value;
  let cono = new Cono(r,h);
  alert(`Datos ${cono.name} update:`);
  cone.innerHTML = cono.messageV();
  cono.plotfig(parseFloat(r))

});


let ButtonCubo= document.getElementById("enterCubo");
ButtonCubo.addEventListener("click", () => {
 
  let l = document.getElementById("ladoC").value;
  let cubo = new Cubo(l);
  alert(`Datos ${cubo.name} update:`);
  cubbo.innerHTML = cubo.messageV();
  cubo.plotfig(parseFloat(l))

});

let ButtonPara = document.getElementById("enterPara");
ButtonPara.addEventListener("click", () => {
 
  let a = document.getElementById("paraA").value;
  let b = document.getElementById("paraB").value;
  let c = document.getElementById("paraC").value;
  let parale = new Paralelepipedo(a,b,c);
  alert(`Datos ${parale.name} update:`);
  paralele.innerHTML = parale.messageV();
  parale.plotfig(parseFloat(b))

});

//  IMG UML

let img = "./frontend/assets/class-diagram.jpeg";
let nuevoElemento1 = document.createElement("div");

let UML = document.getElementById("UML");
console.log(directoryPath);
if (directoryPath == "/" || directoryPath == "/FigurePlot/") {
  let img = "../assets/class-diagram.jpeg";
  nuevoElemento1.innerHTML = `<img src="${img}" id="imagen" alt=""></img>`;
  UML.appendChild(nuevoElemento1);
} else {
  // img = "../assets/class-diagram.jpeg";
  img = "./frontend/assets/class-diagram.jpeg"
  nuevoElemento1.innerHTML = `<img src="${img}" class="card-img" id="imagen" alt="UML"></img>`;
  UML.appendChild(nuevoElemento1);
}



