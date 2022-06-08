function timeToMixJuice(name) {
    // this function returns the minutes it takes to prepare the specifeied juice
    switch (name) {
        case 'Pure Strawberry Joy':
            console.log('Pure Strawberry Joy')
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    };
}

/* function limesToCut(wedgesNeeded, limes) {
    // function that calculates how many limes need to be cut
    console.log(limes);
    let current_wedges = 0;
    let count_limes = 0;
    let i = 0;
    while (current_wedges < wedgesNeeded) {
        console.log(limes[i]);
        switch (limes[i]) {
            case 'small':
                current_wedges += 6;
                count_limes += 1;
            case 'medium':
                current_wedges +=8;
                count_limes += 1;
            case 'large':
                current_wedges +=10; 
                count_limes += 1;

            console.log(current_wedges);
            i += 1;
        }
        
    }
    console.log(i);  
} */

function limesToCut(wedgesNeeded, limes) {
    let current_wedges = 0;
    let current_limes = 0;
    for (let i = 0; i < limes.length; i++) {
        if (current_wedges >= wedgesNeeded) {
            console.log(current_limes);
            return current_limes;
        } else if (limes[i] === 'small') {
            current_wedges += 6;
            current_limes += 1;
        } else if (limes[i] === 'medium') {
            current_wedges += 8;
            current_limes += 1;
        } else if (limes[i] === 'large') {
            current_wedges += 10;
            current_limes += 1;
        }
    }
}

//timeToMixJuice('Pure Strawberry Joy');
limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])


