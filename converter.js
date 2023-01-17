const first = document.getElementById("firstResult");
const second = document.getElementById("secondResult");
const third = document.getElementById("thirdResult");


function lengthConverter(number) {
    const centimeterToInch = number * 2.54;
    const inchToCentimeter = number / 2.54;
    first.innerHTML = `${number} inch(es) = ${centimeterToInch.toFixed(3)} centimeter(s) | ${number} centimeter(s) = ${inchToCentimeter.toFixed(3)} inch(es)`

    const poundToKilogram = number * 2.205;
    const kilogramToPound = number / 2.205;
    second.innerHTML = `${number} pound(s) = ${poundToKilogram.toFixed(3)} kilogram(s) | ${number} kilogram(s) = ${kilogramToPound.toFixed(3)} pound(s)`

    const mileToKilometer = number * 1.609;
    const kilometerToMile = number / 1.609;
    third.innerHTML = `${number} mile(s) = ${mileToKilometer.toFixed(3)} kilometer(s) | ${number} kilometer(s) = ${kilometerToMile.toFixed(3)} mile(s)`
}
