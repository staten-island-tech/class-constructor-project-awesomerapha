//one class to create the object person, album, movie ****Model
class gameCreator{
    constructor(yearOfRelease, title, genre){
        this.yearOfRelease = yearOfRelease;
        this.title = title;
        this.genre = genre;
    }
    calculateAge(){
        return new Date().getUTCFullYear - this.yearOfRelease;
    }
}

//take arguments
function createNewGame(){
    const newGame = new gameCreator(document.querySelector('#yearrelease'), document.querySelector('#title'), document.querySelector('#genre'));
}




// *****View // class for the UI which contains methods

class UI {
    constructor(yearOfRelease, title, genre){
    this.yearOfRelease = newGame.yearOfRelease
    this.title = newGame.title
    this.genre = newGame.genre
    
    
}
    //creates/inserts the html for the UI DISPLAY
htmlConstructor() {
    
    let html = '<div class="display-title">%title%</div><div class="display-genre">%genre%</div><div class="display-yearOfRelease">%yearofrelease%</div><div class="display-age">%age%</div><div class="remove-game"><p class="remove-game">Remove Game &#10006;</p></div>';
    let newHtml = html.replace('%title%', this.title);
    newHtml = newHtml.replace('%genre%', this.genre);
    newHtml = newHtml.replace('%yearofrelease%', this.yearOfRelease);
    newHtml = newHtml.replace('%age%', this.calculateAge);
    display.insertAdjacentHTML('beforeend', newHtml);
    console.log('hello');
    
}
//clear fields method
clearFields() {

}
//remove something/objec
removeGame() {

}
    

}








//Controller combines UI and model
//event handler with function
function eventListeners() {
    const form = document.querySelector('#hello');
    form.addEventListener('click', UI.htmlConstructor); //Figure out
    //display.addEventListener('click', ); //Figure Out
    
}
eventListeners(); 

//get values


//instantiate new class/object album with variable name

//instantiate new UI const ui = new UI()

//call relevant methods


//seperate event handler for removing/deleting