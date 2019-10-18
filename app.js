//one class to create the object person, album, movie ****Model
class gameCreator{
    constructor(yearOfRelease, title, genre){
        this.yearOfRelease = yearOfRelease;
        this.title = title;
        this.genre = genre;
    }
    
}

//take arguments
function createNewGame(){
    const newGame = new gameCreator(document.querySelector('#yearrelease').value, document.querySelector('#title').value, document.querySelector('#genre').value);
}




// *****View // class for the UI which contains methods

class UI {

    //creates/inserts the html for the UI DISPLAY
htmlConstructor(e) {
    let html = '<div class="display-title">%title%</div><div class="display-genre">%genre%</div><div class="display-yearOfRelease">%yearofrelease%</div><div class="remove-game"><p> Remove Game &#10006;</p></div>';
    const newGame = new gameCreator(document.querySelector('#yearrelease').value, document.querySelector('#title').value, document.querySelector('#genre').value);
     let newHtml = html.replace('%title%', newGame.title);
     newHtml = newHtml.replace('%genre%', newGame.genre);
     newHtml = newHtml.replace('%yearofrelease%', newGame.yearOfRelease);
     display.insertAdjacentHTML('beforeend', newHtml);
     e.preventDefault();
}
//clear fields method
clearFields() {

}
//remove something/object
removeGame(e) {
    // if(e.target.parentElement.classList.contains('remove-game')){
    //     e.target.parentElement.parentElement.remove();
    //     //console.log(e.target.parentElement);
    // }
    if(e.target.className === "remove-game"){
        e.target.parentElement.remove();
    }
}
    

}








//Controller combines UI and model
//event handler with function
function eventListeners() {
    const ui = new UI;
    const form = document.querySelector('#videogame-form');
    form.addEventListener('submit', ui.htmlConstructor);
    display.addEventListener('click', ui.removeGame)
}
eventListeners(); 

//get values


//instantiate new class/object album with variable name

//instantiate new UI const ui = new UI()

//call relevant methods


//seperate event handler for removing/deleting
