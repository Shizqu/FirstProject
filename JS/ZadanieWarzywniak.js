let tnr = [1,2,3,4,5,6,7]
    ,towoc = ["papaja","banan","truskawka","mandarynka"]
    ,nr = prompt("wat nr u lookin fo")
    ,owoc = prompt("wat color u lookin fo")
    ,gotnr = false
    ,gotowoc = false;
for (let i=0;i<tnr.length;i++)
    if (+nr === tnr[i])
        gotnr = true;
for (let i=0;i<towoc.length;i++)
    if (owoc === towoc[i])
        gotcolor = true;
if (true === gotowoc && gotowoc=== gotnr)
    document.write("we got what you need")
else if (gotowoc === true)
    document.write(`we dont have the nr ${nr}`)
else if (gotnr === true)
    document.write(`we dont have the color ${owoc}`)
else
    document.write(`we dont have the nr ${nr} or the color ${owoc}`)