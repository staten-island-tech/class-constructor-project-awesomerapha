//one class to create the object person, album, movie ****Model
class gameCreator{
    constructor(yearOfRelease, title, genre, imglink){
        this.yearOfRelease = yearOfRelease;
        this.title = title;
        this.genre = genre;
        this.imglink = imglink;
    }
    
}

//take arguments





// *****View // class for the UI which contains methods

class UI {

    //creates/inserts the html for the UI DISPLAY
htmlConstructor(game) {
    
    let html = '<div class="display-game"><div class="display-title">%title%</div><div class="display-genre">%genre%</div><div class="display-yearofrelease">%yearofrelease%</div><div class="game-cover"><img src="%imglink%"></div><div class="remove-game">Remove Game X</div>';
     let newHtml = html.replace('%title%', game.title);
     newHtml = newHtml.replace('%genre%', game.genre);
     newHtml = newHtml.replace('%yearofrelease%', game.yearOfRelease);
     newHtml = newHtml.replace('%imglink%', game.imglink);
     document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
     
}
//clear fields method
clearFields() {
    document.getElementById('videogame-form').reset();
}
//remove something/object
removeGame(target) {
    if (target.className === 'remove-game') {
        target.parentElement.remove();
        
}

}
}







//Controller combines UI and model
//event handler with function

/* function eventListeners() {
    const ui = new UI;
    const form = document.querySelector('#videogame-form');
    form.addEventListener('submit', ui.htmlConstructor);
    display.addEventListener('click', ui.removeGame)
}
eventListeners();  */

document.getElementById('videogame-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const yearOfRelease = document.getElementById('yearrelease').value;
    const imglink = document.getElementById('imglink').value;
    if(title.length == 0 || genre.length == 0 || yearOfRelease.length == 0 || imglink.length == 0){
        alert('Fill Out All Fields Please');
    }
    else{
    const game = new gameCreator(title, genre, yearOfRelease, imglink);
    
    const ui = new UI();

    ui.htmlConstructor(game);

    ui.clearFields();

    e.preventDefault();
    }
});

//get values


//instantiate new class/object album with variable name

//instantiate new UI const ui = new UI()

//call relevant methods


//seperate event handler for removing/deleting
document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
 
    ui.removeGame(e.target);

    ui.clearFields();

    e.preventDefault(); 
});
