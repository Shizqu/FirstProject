
class warzywa
{
    Name = "empty";
    Price = 0.00;
    Stock = 0;
}

let warzywo = new Array(2);
for(let i=0;i<3;i++)
{
    warzywo[i] = new warzywa;
    warzywo[i].Name = prompt('Podaj nazwe warzywa: ');
    warzywo[i].Price = prompt('Podaj cene warzywa');
    warzywo[i].Stock = prompt('Podaj ilosc warzywa w magazynie');
}
for(let i=0;i<3;i++)
{
    document.write(warzywo[i].Name+ " Mamy w cenie: ");
    document.write(warzywo[i].Price+ " I mamy ich w magazynie: ");
    document.write(warzywo[i].Stock);
    document.write('<br>');
}

for(let i=0;i<3;i++)
{
    if(warzywo[i].Price<5)
        document.write('Warzywa o cenie mniejszej niz 5 to:'+warzywo[i].Name+ ' , ');
}


let NameA = prompt("Jakie warzywo cie interesuje");
for(let i=0;i<3;i++)
{
    if (NameA === warzywo[i].Name)
    {
        document.write("interesuje cie " + NameA+ ' , Mamy je w cenie:' + warzywo[i].Price + ' i ilości w magazynie:' + warzywo[i].Stock);
    }
}

// alert(komora.brand);
//let text = prompt("Podaj treść sms-a");
//komora.sendSms(text);
//document.write(komora.sms);
//alert(komora);

/*
let telefon = new Phone;
telefon.user = 'Tomek';
let telefony=[komora,telefon];
alert(telefony[1].user);
*/

/*
let warzywa = new Array(20);
warzywa[0]=new Phone;
warzywa[0].user='bob';
alert(warzywa[0].user);
*/

