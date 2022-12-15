class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        } else {
            altitude = Number(altitude);
            this.goals[peak] = {altitude};
            return `You have successfully added a new goal - ${peak}`
        }

    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources === 0) {
            throw new Error(`You don't have enough resources to start the hike`)
        }

        let result = this.resources - (Number(time) * 10)
        if (result <= 0) {
            return `You don't have enough resources to complete the hike`
        } else {
            this.resources -= result;
            let hike = {peak, time, difficultyLevel};

            this.listOfHikes.push(hike)

            return `You hiked ${peak} peak for ${time} hours and you have ${result}% resources left`
        }


    }

    rest(time) {
        let result = Number(time) * 10;
        this.resources += result;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }


    }

    showRecord(criteria) {
        let hardLevelArr = []
        let easyLevelArr = []
        let allLevelArr = []
        let hard = false;
        let easy = false;
        let all = false;
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        for (const listOfHike of this.listOfHikes) {
            if (criteria === 'hard') {
                hard = true;
                if (listOfHike.difficultyLevel === 'hard') {
                    hardLevelArr.push(listOfHike);
                }
            } else if (criteria === 'easy') {
                easy = true
                if (listOfHike.difficultyLevel === 'easy') {
                    easyLevelArr.push(listOfHike);
                }
            } else {
                all = true;
                allLevelArr.push(listOfHike)
            }
        }
        if (hard) {
            if (hardLevelArr.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            let sorted = hardLevelArr.sort((a, b) => a.time - b.time);
            let fastest = sorted.shift()
            return `${this.username}'s best ${criteria} hike is ${fastest.peak} peak, for ${fastest.time} hours`
        } else if (easy) {
            if (easyLevelArr.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            let sorted = easyLevelArr.sort((a, b) => a.time - b.time);
            let best = sorted.shift()
            return `${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`
        } else {
            let resultString = 'All hiking records:' + `\n`;
            for (const all of allLevelArr) {

                resultString += `${this.username} hiked ${all.peak} for ${all.time} hours` + `\n`
            }
            console.log(resultString)


        }
        if (criteria !== 'easy' || criteria !== 'hard' || criteria !== 'all') {
            return `${this.username} has not done any ${criteria} hiking yet`
        }

    }
}
