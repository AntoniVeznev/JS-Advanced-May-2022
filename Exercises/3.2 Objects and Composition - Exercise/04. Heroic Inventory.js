function solve(array) {
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {
        let hero = {};

        let currentString = array[index].split(' / ');

        let heroName = currentString[0];
        let heroLevel = Number(currentString[1]);
        if (currentString.length === 3) {
            let heroItems = currentString[2].split(', ');
            hero.name = heroName;
            hero.level = heroLevel;
            hero.items = heroItems;
            resultArray.push(hero)
        } else {
            let heroItems = [];
            hero.name = heroName;
            hero.level = heroLevel;
            hero.items = heroItems;
            resultArray.push(hero)
        }

    }
    console.log(JSON.stringify(resultArray))
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])