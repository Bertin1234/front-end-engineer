const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

// exercise destructed assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep(){
            console.log('Beep Boop');
        },
        fireLaser(){
            console.log('Pew Pew');
        }
    }
};

const {functionality} = robot;
functionality.beep;