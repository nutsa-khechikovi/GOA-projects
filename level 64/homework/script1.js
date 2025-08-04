// Scope Pollution - roca bevri cvladi iyris kodshi tavs rac areulobas da kodis dazianebas iwvevs.
// scope - 
let name = "Nutsa";
function greet() {
  name = "mari";
  console.log("Hello, " + name);
}
greet();
console.log(name)
// Scope - cvladze wvdoma
// 1) Global Scope – yvela punqcias miewodeba
// 2) Function Scope – mxolod punqciashi mushaobs
// 3) Block Scope – mxolod blokshi mushaobs