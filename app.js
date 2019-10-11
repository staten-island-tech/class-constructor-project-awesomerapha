//one class to create the object person, album, movie ****Model
//take arguments

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




// *****View // class for the UI which contains methods

class UI {
    constructor(htmlConstructor){
    htmlConstructor() {
        document.querySelector('#hello').addEventListener('click', fuck);
        
    }
}
    

}
function fuck() {
    const newGame = new gameCreator(document.querySelector('#title'), document.querySelector('#genre'), document.querySelector('#yearrelease'));
        let html = '<div class="display-title">%title%</div><div class="display-genre">%genre%</div><div class="display-yearOfRelease">%yearofrelease%</div><div class="display-age">%age%</div><div class="remove-game"><p class="remove-game">Remove Game &#10006;</p></div>';
        let newHtml = html.replace('%title%', newGame.title);
        newHtml = newHtml.replace('%genre%', newGame.genre);
        newHtml = newHtml.replace('%yearofrelease%', newGame.yearOfRelease);
        newHtml = newHtml.replace('%age%', newGame.calculateAge);
        display.insertAdjacentHTML('beforeend', newHtml);
        console.log('hello');
        
}
new UI.htmlConstructor();
//creates/inserts the html for the UI DISPLAY

//clear fields method

//remove something/object




//Controller combines UI and model
//event handler with function
/* function eventListeners() {
    const form = document.querySelector('#hello');
    form.addEventListener('click', UI.htmlConstructor); //Figure out
    //display.addEventListener('click', ); //Figure Out
    
}
eventListeners(); */

//get values


//instantiate new class/object album with variable name

//instantiate new UI const ui = new UI()

//call relevant methods


//seperate event handler for removing/deleting