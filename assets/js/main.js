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
for (iRundenIndex = 1 ; iRundenIndex < 101 ; iRundenIndex = iRundenIndex + 1) {
    testZahlen.push(iRundenIndex);
    console.log(testZahlen);
};

// testen welche Zahlen keinen Rest geben mit Modulo %
console.log(numArr[0]/testZahlen[0]) 