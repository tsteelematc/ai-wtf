const gameResults = [
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

interface LeaderboardEntry {
    player: string;
    wins: number;
}

function buildLeaderboard(results: typeof gameResults): LeaderboardEntry[] {
    const leaderboard: { [key: string]: number } = {};

    results.forEach(result => {
        if (leaderboard[result.winner]) {
            leaderboard[result.winner]++;
        } else {
            leaderboard[result.winner] = 1;
        }
    });

    return Object.keys(leaderboard).map(player => ({
        player,
        wins: leaderboard[player]
    })).sort((a, b) => b.wins - a.wins);
}

const leaderboard = buildLeaderboard(gameResults);
console.log(leaderboard);

