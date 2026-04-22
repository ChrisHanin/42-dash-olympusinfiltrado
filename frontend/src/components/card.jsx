const games = [
	{ id: 1, name: 'Starburst', provider: 'NetEnt', category: 'Slots' },
	{ id: 2, name: 'Lightning Roulette', provider: 'Evolution', category: 'Live Casino' },
	{ id: 3, name: 'Book of Dead', provider: 'Play\'n GO', category: 'Slots' },
	{ id: 4, name: 'Blackjack Surrender', provider: 'Pragmatic Play', category: 'Table Games' },
	{ id: 5, name: 'Fruit Party', provider: 'Pragmatic Play', category: 'Slots' },
	{ id: 6, name: 'Mega Wheel', provider: 'Evolution', category: 'Game Shows' },
];

function Card() {
	return (
		<section className="games-section" aria-label="Game list">
			<h2>Game Grid/List</h2>
			<div className="games-grid">
				{games.map((game) => (
					<article key={game.id} className="game-card">
						<h3>{game.name}</h3>
						<p>
							<span className="label">Provider:</span> {game.provider}
						</p>
						<p>
							<span className="label">Category:</span> {game.category}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default Card;
