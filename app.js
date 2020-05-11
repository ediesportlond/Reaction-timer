//random color function
function randomColor(){
    var color = '#';
    const range = '0123456789abcdef'
    for (let i = 0; i < 6; i++){
        let x = Math.floor(Math.random()*16)
        color += range.substr(x,1);
    }; return color;
};
 

//create shape using above functions
function createShape(){
    //div is created
    var shape = document.createElement('div');
    shape.id = 'shape';

    //shape is assigned randomly
    var selector = Math.floor(Math.random()*2);
    selector == 0 ? shape.style.borderRadius = '50%': null;

    //color is picked and assigned
    shape.style.backgroundColor = randomColor();
    
    //size is picked and assigned
    var pixels = Math.floor(Math.random()*150)+ 50;
    shape.style.width = pixels+'px';
    shape.style.height = pixels+'px';
    
    //location randomly picked and assigned
    var top = Math.floor(Math.random()*350)+ 150;
    var left = Math.floor(Math.random()*700);
    shape.style.position ='absolute';
    shape.style.top = top+'px';
    shape.style.left = left+'px';
    
    document.body.appendChild(shape);

    //sets chain of events when shape is clicked
    shape.onclick = function (){
    
        document.body.removeChild(shape);
        let duration = Date.now()-timer;
        document.getElementById('results').innerHTML = 'Your time was '+duration/1000 +' seconds!';
        
        /*adds a random delay to when shapes pop up
        resets timer*/
        let time = Math.floor(Math.random()*2000); 
        setTimeout(function (){
            
            createShape();
            timer = Date.now();
        
        }, time);
        

    };

}


//function call to start the game and set initial timer
var timer = Date.now();
createShape();




