var gameResults = [
    {
        winner: "Tom",
        players: ["Tom", "Jerry"],
    },
    {
        winner: "Jerry",
        players: ["Tom", "Jerry"],
    },
    {
        winner: "Tom",
        players: ["Tom", "Jerry"],
    }
];
function buildLeaderboard(results) {
    var leaderboard = {};
    results.forEach(function (result) {
        if (leaderboard[result.winner]) {
            leaderboard[result.winner]++;
        }
        else {
            leaderboard[result.winner] = 1;
        }
    });
    return Object.keys(leaderboard).map(function (player) { return ({
        player: player,
        wins: leaderboard[player]
    }); }).sort(function (a, b) { return b.wins - a.wins; });
}
var leaderboard = buildLeaderboard(gameResults);
console.log(leaderboard);
