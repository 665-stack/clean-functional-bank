function setPlayerStyle(player) {
    player.style.border = '2px solid green';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px'
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);

}
//add player with button;
function addPlayer() {
    const playersContainer = document.getElementById('players');
    //create players
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio id odio voluptates? Quidem, maxime?
    Commodi delectus quos, sed deserunt, unde consectetur ut odit fuga laboriosam explicabo sit magni
    optio possimus.</p>
    `;

    //appendChild
    playersContainer.appendChild(player);
    //styles -- 
    setPlayerStyle(player);
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = '#557B83';
    }
    else {
        event.target.parentNode.style.backgroundColor = '#557B83'

    }

})






//do style with class and queryselector;
//1st player
document.getElementsByClassName('player')[3].style.backgroundColor = 'SeaGreen'
//4th player
document.querySelector(' #players .player:first-child').style.backgroundColor = 'ForestGreen'

