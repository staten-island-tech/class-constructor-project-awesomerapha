function videoGame(title, genre, yearOfRelease) {
    this.title = title;
    this.genre = genre;
    this.yearOfRelease = yearOfRelease;
    this.age = function() {
        return new Date().getUTCFullYear() - this.yearOfRelease;
    }
    
}
