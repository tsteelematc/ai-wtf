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
        result.players.forEach(function (player) {
            if (!leaderboard[player]) {
                leaderboard[player] = { wins: 0, losses: 0 };
            }
            if (player === result.winner) {
                leaderboard[player].wins++;
            }
            else {
                leaderboard[player].losses++;
            }
        });
    });
    return Object.keys(leaderboard).map(function (player) {
        var _a = leaderboard[player], wins = _a.wins, losses = _a.losses;
        var totalGames = wins + losses;
        var average = totalGames > 0 ? wins / totalGames : 0;
        return {
            player: player,
            wins: wins,
            losses: losses,
            average: average
        };
    }).sort(function (a, b) { return b.wins - a.wins; });
}
var leaderboard = buildLeaderboard(gameResults);
console.log(leaderboard);
