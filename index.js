// code your solution here
function superbowlWin(record) {
    const yearWon = record.find((rec) => rec.result === "W")
    return yearWon ? yearWon.year : undefined
}