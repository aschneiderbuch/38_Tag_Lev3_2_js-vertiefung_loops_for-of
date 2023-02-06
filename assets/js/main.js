console.log("test");
console.log("test");

/* 
Frage 
    du hast array numArr
        durch welche Zahlen Sie teilbar ist 
            außer nur durch 1
            außer nur durch sich selbst
            
    Output  innerHTML
    
    */


let numArr = [5, 22, 15, 100, 55]
/* 
while-Schleife, da Ende/RundenDurchläufe unbekannt ? */

// sollen 1-100 werden usw.
let testZahlen = [];

let ergebis = [];


for (let iRundenIndex = 1; iRundenIndex < 101; iRundenIndex = iRundenIndex + 1) {
    testZahlen.push(iRundenIndex);
    console.log(testZahlen); // [1,2,..,100 ]
}
// testen welche Zahlen keinen Rest geben mit Modulo %
console.log(numArr[0] / testZahlen[0]) 
console.log(numArr.length); // 5
for (iRundenIndex1Bis5 = 0; iRundenIndex1Bis5 < numArr.length; iRundenIndex1Bis5 = iRundenIndex1Bis5 + 1) {
    console.log(iRundenIndex1Bis5); // 0, 1, 2, 3, 4 

    let ergebnisDiv = [];
    let ergebnisDivTeiler = [];
    keinenRest(numArr, testZahlen, ergebnisDiv, ergebnisDivTeiler);


    console.log(ergebnisDiv)
    ergebis.push(ergebnisDiv + ", " + ergebnisDivTeiler)

    console.log(ergebis);



}; // function zu



// soll numArry durchlaufen und alles einzeln durch testZahlen machen 
// also 5 : 1-100 , 22 : 1-100 usw
// wenn rest Modulo 0 dann nicht ausgeben    
// evtl. noch wenn :1 und durch numArry = testZahl, dann nicht rechnen
function keinenRest(numArr, testZahlen, ergebnisDiv, ergebnisDivTeiler) {
    console.log(numArr[iRundenIndex1Bis5]); // 5, 22, 15 , 100 , 55
    console.log(testZahlen); // [1,2,..,100 ]

    console.log(testZahlen.length); // 100
    for (let iRundenIndex = 0; iRundenIndex < testZahlen.length; iRundenIndex = iRundenIndex + 1) {
        console.log(iRundenIndex); // 0, 2, ... 100

        console.log(numArr[iRundenIndex1Bis5], testZahlen[iRundenIndex])  // 5 , 1 // 5 , 2 ... 55 , 99 , 55 , 100
        let ergebnisModu = 0;
        ergebnisModu = (numArr[iRundenIndex1Bis5] % testZahlen[iRundenIndex]);
        console.log(ergebnisModu);

       // ergebnisDiv = ((numArr[iRundenIndex1Bis5] / testZahlen[iRundenIndex]))

       // console.log(ergebnisDiv);


        // wenn rest Modulo 0 dann nicht ausgeben    
        // evtl. noch wenn :1 und durch numArry = testZahl, dann nicht rechnen
        if ((ergebnisModu == 0)
            && (numArr[iRundenIndex1Bis5] != testZahlen[iRundenIndex])
            && (testZahlen[iRundenIndex] != 1)) {

            console.log((numArr[iRundenIndex1Bis5] / testZahlen[iRundenIndex]))
            // let ergebnisDiv = [];
           ergebnisDiv.push((numArr[iRundenIndex1Bis5] / testZahlen[iRundenIndex]))
           ergebnisDivTeiler.push(`Die Zahl ${numArr[iRundenIndex]} , kann man mit ${(numArr[iRundenIndex1Bis5]) / (testZahlen[iRundenIndex])} ,  ${testZahlen[iRundenIndex]} mal teilen <br>`)

            console.log(ergebnisDiv); // 5nix 22 , geht durch ? 11 Ergebnis
            console.log(ergebnisDivTeiler); // 5 nix , 22 geht durch 2 11mal,  



        }
        else {
            continue     // hüpf heuch und und mach denn 100 loop weiter
        }
    }
}

console.log(ergebis)

document.write(ergebis)