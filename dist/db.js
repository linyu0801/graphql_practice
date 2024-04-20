const games = [
    { id: '1', title: 'Call of Duty', platform: ['XBOX', 'PC'] },
    { id: '2', title: 'Fortnite', platform: ['PS4', 'PC'] },
    { id: '3', title: 'Minecraft', platform: ['PS4', 'XBOX'] },
    { id: '4', title: 'PUBG', platform: ['PS4', 'PC'] },
    { id: '5', title: 'Dota 2', platform: ['PS4', 'XBOX', 'PC'] },
];
const authors = [
    { id: '1', name: 'Tom', verified: true },
    { id: '2', name: 'Jerry', verified: false },
    { id: '3', name: 'Sally', verified: true },
];
const reviews = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3' },
    { id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4' },
    { id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5' },
    { id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1' },
];
export { games, authors, reviews };
