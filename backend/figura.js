/*
	Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas:
    Triangulo, cuadrado, circulo, rectangulo
  Desarrollar un programa que permita calcular el volumen de un solido regular o figura solidas
*/
class figura {
  constructor(name) {
    this.name = name;
  }
  formula(){}
  perimetro() {}
  area() {}
  volumen() {}

  messageP() {
    return `Figura Plana: ${
      this.name
    }, Perimetro: ${this.perimetro()}, Area: ${this.area()} | `;
  }
  messageV() {
    return `Figura Solida: ${
      this.name
    }, Volumen: ${this.volumen()} | `;
  }

  plotfig(xmax){

    this.ymax = xmax;
    this.trace1 = {
      x: [xmax/2],
      y: [0.5,],
      text: ["",],
      mode: 'text'
    };
    this.layout = {
      title: this.name,
      xaxis: {
        range: [0, xmax+0.1],
        // zeroline: false
      },
      yaxis: {
        range: [0, this.ymax+0.1],
        // zeroline: false

      },
      width: 600,
      height: 600,
      shapes:[]
     
    };
    
    
  }
  makeInterval(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + step * i);
    }
    return arr;
}
makeOnes( stopValue, cardinality) {
  var arr = [];
  for (var i = 0; i < cardinality; i++) {
      arr.push(stopValue);
  }
  return arr;
}
}

class Circulo extends figura {
  constructor(radio) {
    super("Circulo");
    this.radio = parseFloat(radio);
  }
  formula(){
    return `Área = πr^2, P = 2πr`
  }
  perimetro() {
    let perim = 2 * Math.PI * this.radio;
    return perim.toFixed(2);
  }
  area() {
    let area = Math.PI * this.radio ** 2;
    return area.toFixed(2);
    // return area;
  }
  messageP() {
    return super.messageP()+ this.formula() + `| r = ${this.radio}`;
  }
  plotfig(xmax){
  super.plotfig(xmax)  
  let color = 'rgba(10, 11, 96, 0.7)'
  this.layout.shapes.push(
    
      // Filled Circle
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        fillcolor: color,
        x0: 0.1,
        y0: 0.1,
        x1: this.radio,
        y1: this.radio,
        line: {
          color: color
        }
      },)
    var data = [this.trace1];
    Plotly.newPlot('circ', data, this.layout);
  }
}
class Triangulo extends figura {
  constructor(a,b, h) {
    super("Triangulo");
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    let bb = this.b + 1
    this.h = parseFloat(h);
    let hh = this.h + 1
    let x2 = (this.a**2-(hh-1)**2)**0.5+1
    this.c =  parseFloat(((hh-1)**2+(x2-bb)**2)**0.5).toFixed(2)
  }
  formula(){
    return `Área = bh/2, P = a+b+c`
  }
  area() {
    let area = (this.b * this.h) / 2;
    return area.toFixed(2);
  }
  perimetro() {
    let perim = parseFloat(this.a + this.b + parseFloat(this.c));
    return perim.toFixed(2);
  }
  messageP() {
    return (
      super.messageP()+ this.formula()+
      `| a = ${this.a}, b = ${this.b}, c = ${this.c}, h = ${this.h}`
    );
  }
  plotfig(xmax){
    super.plotfig(xmax)  
    let hh = parseFloat(this.h)+1
    let x2 = (this.a**2-(hh-1)**2)**0.5+1
    this.layout.shapes.push(
      
        // Filled Triangle
        {
          type: 'path',
          path: `M 1 1 L ${x2} ${hh}  L ${this.b+1} 1 Z`,
          fillcolor: 'rgba(44, 160, 101, 0.5)',
          line: {
            color: 'rgb(44, 160, 101)'
          }
        },
   )
      var data = [this.trace1];
      Plotly.newPlot('tri', data, this.layout);
    }
}
class Cuadrado extends figura {
  constructor(a) {
    super("Cuadrado");
    this.a = parseFloat(a);
  }
  formula(){
    return `Área = a^2, P = 4a`
  }
  area() {
    let area = this.a ** 2;
    return area.toFixed(2);
  }
  perimetro() {
    let perim = 4 * this.a;
    return perim.toFixed(2);
  }
  messageP() {
    return super.messageP()+this.formula() + ` | a = ${this.a}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  

    let color = 'rgba(100, 11, 96, 0.7)'
    this.layout.shapes.push(
      
        // Filled Circle
        {
          type: 'rect',
          xref: 'x',
          yref: 'y',
          fillcolor: color,
          x0: 0.1,
          y0: 0.1,
          x1: this.a,
          y1: this.a,
          line: {
            color: color
          }
        },)
      var data = [this.trace1];
      Plotly.newPlot('cuad', data, this.layout);
    }
}
class Rectangulo extends figura {
  constructor(a, b) {
    super("Rectangulo");
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }
  formula(){
    return `Área = ab, P = 2(a+b)`
  }
  area() {
    let area = this.a * this.b;
    return area.toFixed(2);
  }
  perimetro() {
    let perim = 2 * (this.a + this.b);
    return perim.toFixed(2);
  }
  messageP() {
    return super.messageP()+this.formula() + `| a = ${this.a}, b = ${this.b}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  

    let color = 'rgba(100, 100, 96, 0.7)'
    this.layout.shapes.push(
      
        // Filled Circle
        {
          type: 'rect',
          xref: 'x',
          yref: 'y',
          fillcolor: color,
          x0: 0.1,
          y0: 0.1,
          x1: this.a,
          y1: this.b,
          line: {
            color: color
          }
        },)
      var data = [this.trace1];
      Plotly.newPlot('rect', data, this.layout);
    }
}
class Rombo extends figura {
  constructor(D, d) {
    super("Rombo");
    this.D = parseFloat(D);
    this.d = parseFloat(d);
    this.l = ((this.D/2)**2+(this.d/2)**2)**0.5
  }
  formula(){
    return `Área = (Dd)/2, P = 4l`
  }
  area() {
    let area = (this.D * this.d)/2;
    return area.toFixed(2);
  }
  perimetro() {
    
    let perim = 4 * (this.l);
    return perim.toFixed(2);
  }
  messageP() {
    return super.messageP() + this.formula()+`| D = ${this.D}, d = ${this.d}, l = ${this.l}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  

    let color = 'rgba(100, 100, 96, 0.7)'
    this.layout.shapes.push(
      
        // Filled 
        {
          type: 'path',
          path: `M 1 ${(this.D)/2} L ${this.d/2+1} ${this.D} L ${this.d+1} ${(this.D)/2} L ${this.d/2+1} 0.1 Z`,
          fillcolor: 'rgba(44, 160, 101, 0.5)',
          line: {
            color: 'rgb(44, 160, 101)'
          }
        },
      )
      var data = [this.trace1];
      Plotly.newPlot('rombo', data, this.layout);
    }

}
class Trapecio extends figura {
  constructor(B, b,l) {
    super("Trapecio Isoceles" );
    this.B = parseFloat(B);
    this.b = parseFloat(b);
    this.l = parseFloat(l);
    this.h = (this.l**2-((this.B-this.b)/2)**2)**0.5
    this.h = this.h.toFixed(2)
    
  }
  formula(){
    return `Área = h(B+b)/2, P = B+b+2l`
  }
  area() {
    let area = this.h * (this.B + this.b )/2;
    return area.toFixed(2);
  }
  perimetro() {
    
    let perim = this.B + this.b + 2*this.l;
    return perim.toFixed(2);
  }
  messageP() {
    return super.messageP()+ this.formula() + `| B = ${this.B}, b = ${this.b}, l = ${this.l}, h =${this.h}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  
    let hh = parseFloat(this.h)+1
    let dd = (this.B-this.b)/2+1
    let dD = this.b+dd
    this.layout.shapes.push(
      
        // Filled Circle
        {
          type: 'path',
          path: `M 1 1 L ${dd} ${hh} L ${dD} ${hh} L ${this.B+1} 1 Z`,
          fillcolor: 'rgba(44, 160, 101, 0.5)',
          line: {
            color: 'rgb(44, 160, 101)'
          }
        },
      )
      var data = [this.trace1];
      Plotly.newPlot('trape', data, this.layout);
    }
}


class Esfera extends figura{
  constructor(r) {
    super("Esfera");
    this.r = parseFloat(r);
  }
  formula(){
    return `Volumen = 3/4(πr^3)`
  }
  volumen(){
  let vol = (4/3)*  Math.PI  * this.r**3 
  return vol.toFixed(2)
  }
  messageV() {
    return super.messageV()+this.formula() + ` | r = ${this.r}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  
let a = [];
let b = [];
let c = [];

let phiArr = this.makeInterval(0, Math.PI, 50);
let thetaArr = this.makeInterval(0, 2*Math.PI, 50); 
//  x y z coord esfericas
for (let i=0; i<thetaArr.length; i++){
    for (let j=0; j<phiArr.length; j++){
        a.push(this.r * Math.cos(thetaArr[i]) * Math.sin(phiArr[j]));
        b.push(this.r * Math.sin(thetaArr[i]) * Math.sin(phiArr[j]));   
        c.push(this.r * Math.cos(phiArr[j]));
    }
}

var data = [{
    opacity: 1,
    color: 'rgb(211,211,211)',
    type: 'mesh3d',
    x: a,
    y: b,
    z: c,
}];



    Plotly.newPlot('esfera', data, this.layout)
    }


  
}
class Cilindro extends figura{
  constructor(r,h) {
    super("Cilindro");
    this.r = parseFloat(r);
    this.h = parseFloat(h);
  }
  formula(){
    return `Volumen = (πr^2h)`
  }
  volumen(){
  let vol = this.h *  Math.PI  * this.r**2 
  return vol.toFixed(2)
  }
  messageV() {
    return super.messageV()+this.formula() + ` | r = ${this.r}, h = ${this.h}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  
let a = [];
let b = [];
let c = [];
let d = [];
let e = [];
let f = [];
let g = [];

let phiArr = this.makeInterval(0, 2*Math.PI, 50);
let hArr = this.makeInterval(0, this.h, 50);
for (let i=0; i<hArr.length; i++){
  a.push(this.r * Math.cos(phiArr[i]));
  b.push(this.r * Math.sin(phiArr[i])); 
  c.push(hArr[0]);
  d.push(hArr[12]);
  e.push(hArr[25]);
  g.push(hArr[37]);
  f.push(this.h);
}
var data = [{
    opacity: 1,
    color: 'rgb(21,211,211)',
    type: 'mesh3d',
    x: a,
    y: b,
    z: c,
},
{  opacity: 1,
  color: 'rgb(21,211,211)',
  type: 'mesh3d',
  x: a,
  y: b,
  z: d,

},
{  opacity: 0.8,
  color: 'rgb(21,211,211)',
  type: 'mesh3d',
  x: a,
  y: b,
  z: e,

},
{  opacity: 1,
  color: 'rgb(21,211,211)',
  type: 'mesh3d',
  x: a,
  y: b,
  z: g,

},
{  opacity: 1,
  color: 'rgb(21,211,211)',
  type: 'mesh3d',
  x: a,
  y: b,
  z: f,

}];



    Plotly.newPlot('cilindro', data, this.layout)
    }


  
}
class Cono extends figura{
  constructor(r,h) {
    super("Cono");
    this.r = parseFloat(r);
    this.h = parseFloat(h);
  }
  formula(){
    return `Volumen = (1/3) × π × r² × h`
  }
  volumen(){
  let vol = (1/3) * this.h *  Math.PI  * this.r**2 
  return vol.toFixed(2)
  }
  messageV() {
    return super.messageV()+this.formula() + ` | r = ${this.r}, h = ${this.h}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)  
let a = [];
let b = [];
let c = [];
let d = [];
let e = [];
let f = [];
let g = [];
let h = [];
let j = [];
let k = [];
let l = [];
let p = [];
let o = [];

let phiArr = this.makeInterval(0, 2*Math.PI, 50);
let hArr = this.makeInterval(0, this.h, 50); 
//  x y z coord cilindricas
for (let i=0; i<hArr.length; i++){
  a.push(this.r * Math.cos(phiArr[i]));
  b.push(this.r * Math.sin(phiArr[i])); 
  c.push(hArr[0]);
  h.push(0.5*this.r * Math.cos(phiArr[i]));
  j.push(0.5*this.r* Math.sin(phiArr[i])); 
  k.push(0.2*this.r * Math.cos(phiArr[i]));
  l.push(0.2*this.r* Math.sin(phiArr[i])); 
  p.push(0.1*this.r * Math.cos(phiArr[i]));
  o.push(0.1*this.r* Math.sin(phiArr[i])); 
  d.push(hArr[12]);
  e.push(hArr[25]);
  g.push(hArr[37]);
  f.push(this.h);
}
var data = [
{  opacity: 0.4,
  color: 'rgb(21,11,211)',
  type: 'mesh3d',
  x: p,
  y: o,
  z: d,

},
{  opacity: 0.8,
  color: 'rgb(21,211,211)',
  type: 'mesh3d',
  x: k,
  y: l,
  z: e,

},
{  opacity: 0.5,
  color: 'rgb(21,11,211)',
  type: 'mesh3d',
  x: h,
  y: j,
  z: g,

},
{  opacity: 0.1,
  color: 'rgb(21,211,11)',
  type: 'mesh3d',
  x: a,
  y: b,
  z: f,

}];



    Plotly.newPlot('cono', data, this.layout)
    }


  
}
class Cubo extends figura{
  constructor(l) {
    super("Cubo");
    this.l = parseFloat(l);
  }
  formula(){
    return `Volumen = a^3`
  }
  volumen(){
  let vol = this.l**3; 
  return vol.toFixed(2)
  }
  messageV() {
    return super.messageV()+this.formula() + ` | l = ${this.l}`;
  }
  plotfig(xmax){
    super.plotfig(xmax)

    var x = [0, 0, this.l, this.l, 0, 0, this.l, this.l]
    var y = [0, this.l, this.l, 0, 0, this.l, this.l, 0]
    var z = [0, 0, 0, 0, this.l, this.l, this.l, this.l]
    var i = [7, 0, 0, 0, 4, 4, 2, 6, 4, 0, 3, 7]
    var j = [3, 4, 1, 2, 5, 6, 5, 5, 0, 1, 2, 2]
    var k = [0, 7, 2, 3, 6, 7, 1, 2, 5, 5, 7, 6]
    
    var facecolor = [
      'rgb(50, 200, 200)',
      'rgb(100, 200, 255)',
      'rgb(150, 200, 115)',
      'rgb(200, 200, 50)',
      'rgb(230, 200, 10)',
      'rgb(255, 140, 0)'
    ]
    
   let facecolor2 = new Array(facecolor.length * 2);
    
    facecolor.forEach(function(x, i) {
      facecolor2[i * 2 + 1] = facecolor2[i * 2] = x;
    });
    
    var data = {
      x: x,
      y: y,
      z: z,
      i: i,
      j: j,
      k: k,
      facecolor: facecolor2,
      type: 'mesh3d'
    }
    
    // Plotly.newPlot('myDiv', [data])
    
    Plotly.newPlot('cubo', [data], this.layout)
    }


  
}
class Paralelepipedo extends figura{
  constructor(a,b,c) {
    super("Paralelepipedo Rectangular");
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.c = parseFloat(c);
  }
  formula(){
    return `Volumen = a*b*c`
  }
  volumen(){
  let vol = this.a*this.b*this.c; 
  return vol.toFixed(2)
  }
  messageV() {
    return super.messageV()+this.formula() + ` | a = ${this.a} , b = ${this.b},c  = ${this.c}`;
  }
  rectangle(x, y, z, range_x, range_y, range_z) {

    if (range_x.length !== 2 || range_y.length !== 2 || range_z.length !== 2) {
      throw 'Ranges must contain 2 values';
    }
    // we will forego other checks for to limit the length of the example
    x = x.map(function(e, i) {
      return range_x[e];
    });
  
    y = y.map(function(e, i) {
      return range_y[e];
    });
  
    z = z.map(function(e, i) {
      return range_z[e];
    });
  
    return {x: x, y: y, z: z};
  }
  plotfig(xmax){
    super.plotfig(xmax)

  // Note x, y, z define the vertices for a unit cube

var x = [0, 0, 1, 1, 0, 0, 1, 1];
var y = [0, 1, 1, 0, 0, 1, 1, 0];
var z = [0, 0, 0, 0, 1, 1, 1, 1];
var i = [7, 0, 0, 0, 4, 4, 2, 6, 4, 0, 3, 7];
var j = [3, 4, 1, 2, 5, 6, 5, 5, 0, 1, 2, 2];
var k = [0, 7, 2, 3, 6, 7, 1, 2, 5, 5, 7, 6];

var range_x = [0, this.a];
var range_y = [0, this.b];
var range_z = [0, this.c];



let result = this.rectangle(x, y, z, range_x, range_y, range_z);

// x, y, z now represent the vertices for the rectangular box with
// the ranges specified above
x = result.x;
y = result.y;
z = result.z;

var facecolor = [
    'rgb(50, 200, 200)',
    'rgb(100, 200, 255)',
    'rgb(150, 200, 115)',
    'rgb(200, 200, 50)',
    'rgb(230, 200, 10)',
    'rgb(255, 140, 0)'
];

let facecolor2 = new Array(facecolor.length * 2);
facecolor.forEach(function(x, i) {
    facecolor2[i * 2 + 1] = facecolor2[i * 2] = x;
});

var data = {
    x: x,
    y: y,
    z: z,
    i: i,
    j: j,
    k: k,
    facecolor: facecolor2,
    type: 'mesh3d'
};



    
    Plotly.newPlot('parale', [data], this.layout)
    }


  
}
export { Circulo, Triangulo, Cuadrado, Rectangulo,Rombo,Trapecio ,Esfera, Cilindro,Cono,Cubo, Paralelepipedo};
