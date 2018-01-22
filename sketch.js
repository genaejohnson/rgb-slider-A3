var ruckerSlider, genaeSlider, bakerSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    ruckerSlider = createSlider(0,255,0);
    ruckerSlider.position(20, 20);
    
    genaeSlider = createSlider(0, 255, 0);
    genaeSlider.position(20, 50);
    
    bakerSlider = createSlider(0,255,0);
    bakerSlider.position(20, 80);
}

function draw(){
    redRuby = ruckerSlider.value();
    greenSavage = genaeSlider.value();
    blueKiller = bakerSlider.value();
    
    background(redRuby,greenSavage,blueKiller);
}