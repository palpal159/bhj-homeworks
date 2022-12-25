const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;


getHole = index => document.getElementById(`hole${index}`)

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);
  hole.addEventListener('click', function() {
    if (hole.className.includes('hole_has-mole')) {
      counterDead++;
      if (counterDead === 10) {
        alert('CONGRATULATIONS YOU WIN!');
        counterDead = 0;
        dead.textContent = counterDead;
        counterLost = 0;
        lost.textContent = counterLost;
      }
      dead.textContent = counterDead;
    } else {
      counterLost++;
      if (counterLost === 5) {
        alert('YOU LOSE');
        counterDead = 0;
        dead.textContent = counterDead;
        counterLost = 0;
        lost.textContent = counterLost;
      }
      lost.textContent = counterLost;
    }
  });
};






