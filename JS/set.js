let clothes = new Set();                        // new poniewaz powstaje nowy obiekt klasy set. new jest konstruktorem.  ZBIÓR
// metody tu mają żułty kolor
clothes.add('kurtka');
clothes.add('skarpeta');                       // .add dodaje obiekt do zbioru
clothes.delete('skarpetka');             // .delete usuwa obiekt z zbioru




alert(clothes.has('skarpetka'));          // true bo jest taki obiekt
alert(clothes.has('majtki'));            // false bo nie ma takiego obiektu
alert(clothes.size);                          // wyswietla wielkosc zbioru
console.log(clothes);
clothes.add('kurtka');                       // robi nic
for(let item of clothes) console.log(item);