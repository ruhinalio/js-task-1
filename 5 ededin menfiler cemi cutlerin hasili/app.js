//bes ededin menfilerin toplayib cutleri vuraracig
var birinci = +prompt("birinci ededi daxil edin");
let cem = 0;
let hasil = 1;
if(birinci<0){
  let cem = 0+birinci;
} else if(birinci%2==0){
  let hasil= 1*birinci;
}
var ikinci = +prompt("ikinci ededi daxil edin");
if(ikinci <0){
  let cem = 0+ikinci ;
} else if(ikinci %2==0){
  let hasil= 1*ikinci ;
}
var ucuncu = +prompt("ucuncu ededi daxil edin");
var dorduncu = +prompt("dorduncu ededi daxil edin");
var besinci = +prompt("besinci  ededi daxil edin");

console.log(cem)
console.log(hasil)
