const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.border = '2px solid green';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px'
}
function addPlayer() {
    const playersContainer = document.getElementById('players');
}
//1st player
document.getElementsByClassName('player')[3].style.backgroundColor = 'SeaGreen'
//4th player
document.querySelector(' #players .player:first-child').style.backgroundColor = 'ForestGreen'

