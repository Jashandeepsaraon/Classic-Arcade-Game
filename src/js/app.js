let num = document.querySelector("h1");
let counter = 1;
let maxSpeed = 100;
let minSpeed = 10;
// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = 3 + (Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed));
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt * counter;
    if (this.x > 500) {
        this.x = -70;   
    }
    if (player.x >= this.x - 73 && player.x <= this.x + 73) {
        if (player.y >= this.y - 60 && player.y <= this.y + 60) {
            reset();
        }
    }
    /*for(enemy of allEnemies){
        let enemySpeed = 2 + (Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed));
        enemy.speed = enemySpeed;
    }*/
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

function reset() {
    player.x = 200;
    player.y = 407;
    counter = 1;
    num.textContent = "LEVEL" + (counter);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }
    update() {

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(press) {
        if (press == "left" && this.x > 0) {
            this.x -= 100;
        }
        if (press == "right" && this.x < 400) {
            this.x += 100;
        }
        if (press == "up" && this.y > 0) {
            this.y -= 84;
        }
        if (press == "down" && this.y < 400) {
            this.y += 84;
        }
        if (this.y <= 0) {
            this.y = 407;
            counter++
            num.textContent = "LEVEL" + (counter);
            swal("Congratulations", "You Won!  Now Next level", "success");
        }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//let allEnemies = [new Enemy(208, 215,5), new Enemy(100, 140,10), new Enemy(3, 55,20)]
// Place the player object in a variable called player
let allEnemies = [];
let loction = [55, 140, 218];
loction.forEach(function (loctionY) {
    newEnemy = new Enemy(0, loctionY);
    allEnemies.push(newEnemy);
});

let player = new Player(200, 407);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. Y   ou don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});