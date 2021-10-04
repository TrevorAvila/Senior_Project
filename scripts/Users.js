class User{
    constructor(name, email){
        this.email = email;
        this.name = name;
        this.score = 0;
        this.loggedIn = false;
    }
    //class methods (function assiocated with the class)
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
    updateScore(){
        this.score++
        console.log(this.email, 'score is now', this.score);
    }
}

const populateData = () => {
    const players = []; 
    players.push(new User( 'trevor.avila@sckans.edu', 'trevor')); 
    players.push(new User( 'josh23@gmail.com', 'josh')); 
    for(let i = 0; i < 20; ++i) {
        players.push(new User(Math.random().toString(), 'email@sckans.edu')); 
    }
    
    players.forEach((player, index) => {
        const PlayersContainer = document.querySelector('.players');
        const playerContainer = document.createElement('div');
        playerContainer.classList.add("player");
        
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name');
        nameContainer.innerText = player.name;
        playerContainer.appendChild(nameContainer);
        
        const emailContainer = document.createElement('div');
        emailContainer.classList.add('email');
        emailContainer.innerText = player.email;
        playerContainer.appendChild(emailContainer);
    
        const statusContainer = document.createElement('div'); 
        statusContainer.classList.add('status'); 
        statusContainer.innerText = player.loggedIn; 
        playerContainer.appendChild(statusContainer); 
        
        PlayersContainer.appendChild(playerContainer);
    }); 
}; 

class Equipment{
    constructor(item){
        this.item = item;
    }
}
var gearOne = new Equipment('cones');
var gearTwo = new Equipment('balls');
var gearThree = new Equipment('stakes');
var gearFour = new Equipment('weights');
const equipmentContainer = document.createElement('div');
equipmentContainer.classList.add('item');
equipmentContainer.innerText = gearOne.item;
// playerContainer.appendChild(equipmentContainer);
// PlayersContainer.appendChild(playerContainer);