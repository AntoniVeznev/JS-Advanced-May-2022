function firstTask(typeOfFruit, weightInGrams, kilograms) {

    let type = typeOfFruit;
    let inGrams = weightInGrams;
    let kg = kilograms;

    let inKg = inGrams / 1000;

    let totalMoney = inKg * kg;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${inKg.toFixed(2)} kilograms ${type}.`);

}

firstTask('orange', 2500, 1.80);
firstTask('apple', 1563, 2.35);
