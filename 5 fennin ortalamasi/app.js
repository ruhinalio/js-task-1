//fenlerden ortalama tapilmasi
let sum = 0;
for (let i = 0; i < 5; i++) {
  let a = +prompt("qiymetinizi daxil edin");
  if(a<0){
    continue
  }
  a <= 100 && a > 0
    ? (sum += a)
    : alert("qaqa 100den yuxari bal olmur tezden yaz. EF BESI BAS BLET!!! ");
}
let average = sum / 5;
if (average <= 100 && average >= 90) {
  console.log("siz imtahandan A almisiniz");
} else if (average >= 80 && average <= 89) {
  console.log("siz imtahandan B almisiniz");
} else if (average >= 70 && average <= 79) {
  console.log("siz imtahandan B almisiniz");
} else if (average >= 60 && average <= 69) {
  console.log("siz imtahandan C almisiniz");
} else if (average >= 50 && average <= 59) {
  console.log("siz imtahandan C almisiniz");
}
