export function GetCurrentPerformance(performanceList) {
    let curPerformance = null;
    for (let i = 0; i < performanceList.length; i++) {
        if (curPerformance === null || curPerformance.date <= performanceList[i].date) {
            curPerformance = performanceList[i];
        }
    }
    return curPerformance;
}

export function GetBBPlatesCount(weightInKg, weightBBInKg) {
    // format weightInKg from comma with .
    let plateCount = []
    const weightPlatesInKg = [
        20,
        15,
        10,
        5,
        2.5,
        1,
        0.5
    ]
    const weightUnit = 'kg';

    weightForPlates = weightInKg - weightBBInKg;
    halfWeightForPlates = weightForPlates / 2 // we divide by 2 because we only check 1 side, and we just double the weights

    weightPointerWithPlatesRemain = halfWeightForPlates;

    for (let i = 0; i < weightPlatesInKg.length; i++) { // from Biggest to lowest
        weightsToCheck = weightPlatesInKg[i]
        plateWeightCount = Math.floor(weightPointerWithPlatesRemain / weightsToCheck);
        if (plateWeightCount) {
            weightPointerWithPlatesRemain = weightPointerWithPlatesRemain - plateWeightCount * weightsToCheck;
            plateCount.push({
                'weight': weightsToCheck,
                'unit': weightUnit,
                'count': plateWeightCount * 2
            })
        }
    }

    return plateCount
}