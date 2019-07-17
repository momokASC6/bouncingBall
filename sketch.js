// Variables to set canvas dimensions
var canvasWidth = 600;
var canvasHeight = 600;

// Circle's diameter
var circleWidth = 200; 
// Center the circle based on the canvas width and height
var circleX = canvasWidth/2; 
var circleY = canvasHeight/2;
// The initial velocity of the circle, X is left/right direction, Y is up/down direction
var xVelocity = 1;
var yVelocity = 1;

function setup() {
    // Create the canvas
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    // Clear all previous circles drawn
    clear();
    // Move the circle along the x axis based on the velocity
    circleX += xVelocity;
    // Check if the right edge of the circle touched the edge of the canvas
    if(circleX + circleWidth/2 >= canvasWidth) 
        xVelocity *= -1; // Multiply the velocity by -1 to reverse the velocity, so the circle moves in the opposite direction
    // Check if the left edge of the circled touched the edge of the canvas
    else if(circleX - circleWidth/2 <= 0)
        xVelocity *= -1; // Multiply the velocity by -1 to reverse the velocity, so the circle moves in the opposite direction
    ellipse(circleX, circleY, circleWidth); // Finally draw the circle
    //console.log(circleX);
}