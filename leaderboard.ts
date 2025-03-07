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
    losses: number;
    average: number;
}

function buildLeaderboard(results: typeof gameResults): LeaderboardEntry[] {
    const leaderboard: { [key: string]: { wins: number, losses: number } } = {};

    results.forEach(result => {
        result.players.forEach(player => {
            if (!leaderboard[player]) {
                leaderboard[player] = { wins: 0, losses: 0 };
            }
            if (player === result.winner) {
                leaderboard[player].wins++;
            } else {
                leaderboard[player].losses++;
            }
        });
    });

    return Object.keys(leaderboard).map(player => {
        const { wins, losses } = leaderboard[player];
        const totalGames = wins + losses;
        const average = totalGames > 0 ? wins / totalGames : 0;
        return {
            player,
            wins,
            losses,
            average
        };
    }).sort((a, b) => b.wins - a.wins);
}

const leaderboard = buildLeaderboard(gameResults);
console.log(leaderboard);

