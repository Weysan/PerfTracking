export function GetCurrentPerformance(performanceList) {
    let curPerformance = {date:'', performance:'', unit:''};
    for (let i = 0; i < performanceList.length; i++) {
        if (curPerformance.date <= performanceList[i].date) {
            curPerformance = performanceList[i];
        }
    }
    return curPerformance;
}