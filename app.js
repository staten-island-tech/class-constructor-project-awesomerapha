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
    htmlConstructor(){
        let html = '<div class="display-title">%title</div><div class="display-genre">%genre%</div><div class="display-yearOfRelease">%yearofrelease%</div><div class="display-age">%age%</div><div class="remove-game"><p class="remove-game">Remove Game &#10006;</p></div>'
        let newHtml = html.replace('%title%', gameCreator.title);
        newHtml = newHtml.replace('%genre%', gameCreator.genre);
        newHtml = newHtml.replace('%yearofrelease%', gameCreator.yearOfRelease);
        newHtml = newHtml.replace('%age%', gameCreator.calculateAge);
    }
    

}
//creates/inserts the html for the UI DISPLAY

//clear fields method

//remove something/object




//Controller combines UI and model
//event handler with function
function eventListeners() {
    form.addEventListener('submit', ); //Figure out
    display.addEventListener('click', ); //Figure Out
}
eventListeners();

//get values


//instantiate new class/object album with variable name

//instantiate new UI const ui = new UI()

//call relevant methods


//seperate event handler for removing/deleting