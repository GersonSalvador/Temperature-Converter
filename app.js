console.log("@sandeepnegi1996");


var celciusInput= document.querySelector("#celcius>input");
var farenheightInput=document.querySelector("#farhenheight>input");
var kelvinInput=document.querySelector("#kelvin>input");

function roundnum(num)
{
    return Math.round(num*100)/100;
}

function celciusToFahrenheightAndKelvin()
{
    var ctemp=parseFloat(celciusInput.value);

    var ftemp= (ctemp*(9/5)) + 32;

    var ktemp= ctemp + 273.5;

    farenheightInput.value=roundnum(ftemp);
    kelvinInput.value=roundnum(ktemp);
}




function main()
{
    celciusInput.addEventListener('input',celciusToFahrenheightAndKelvin);

}

main();
