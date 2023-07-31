function privateTest(){
    let points = 0;
    this.getPoints = function() {
        return points;
    };
    this.score = function(){
        points++;
    }
}

let private = new privateTest();
private.score();
console.log(private.points); // undeffined
console.log(private.getPoints());
