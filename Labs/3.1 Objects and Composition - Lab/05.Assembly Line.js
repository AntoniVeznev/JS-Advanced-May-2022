function createAssemblyLine() {

    const myCar = {
        make: 'Toyota',
        model: 'Avensis',
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSetting = 21
        },
        adjustTemp() {
            if (this.temp < this.tempSetting) {
                this.temp++;
            } else if (this.temp > this.tempSetting) {
                this.temp--;
            }
        },
        hasAudio(myCar) {
            let currentTrack = {
                name: null,
                artist: null,
                nowPlaying() {
                    if (currentTrack.name !== null && currentTrack.artist !== null) {
                        console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
                    }
                }
            }
        },
        hasParktronic(myCar) {
        },
        checkDistance(distance) {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!')
            } else if (0.1 <= distance && distance < 0.25) {
                console.log('Beep! Beep!')
            } else if (0.25 <= distance && distance < 0.5) {
                console.log('Beep!')
            } else {
                console.log('')
            }
        }
    }
    return myCar;
}





