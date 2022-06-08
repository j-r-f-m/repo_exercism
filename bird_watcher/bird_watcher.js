function totalBirdCount(birdsPerDay) {
    let total_birds = 0;
    for(let i = 0; i < birdsPerDay.length; i++){
      total_birds += birdsPerDay[i]; 
    };
    return total_birds;
  }

function birdsInWeek(birdsPerWeek, week) {
    /* 
    - this function seperates the input array
    - it removes seven entries from the input array and saves them in an interim 
      array. This process is repeated until the input array is empty 
    - the interim array gets pushed into a third array. The third array contains
      the array with the values of the birds watched on each single day
    - it is then possible to count the amount of birds watched in one week
    */

    // arrays that contains arrays with counted birds in one weeks
    let split_week = [];
    //console.log(birdsPerWeek);

    while(birdsPerWeek.length > 0) {
        // array that contains the counted birds per da
        let interim_array = [];
        for (let i = 0; i < 7; i++) {
            let birds_day = birdsPerWeek.shift();
/*             console.log(birds_day) 
            console.log(birdsPerWeek) */
            interim_array.push(birds_day);   
        }
        //console.log(interim_array);
        split_week.push(interim_array);
        console.log(split_week);
    }

    let arr_birds_week = split_week[week-1];
    let initVal = 0;
    let sum_birds = arr_birds_week.reduce(
        (previousVal, currentVal) => previousVal + currentVal, initVal
    );
    console.log(sum_birds); 
    return sum_birds;

}

function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
        birdsPerDay[i] += 1
    }
    console.log(birdsPerDay);
    return birdsPerDay;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

// birdsInWeek(birdsPerDay,2);
fixBirdCountLog([2, 5, 0, 7, 4, 1]);


