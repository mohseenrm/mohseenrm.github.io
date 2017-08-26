/*
___  ___      _
|  \/  |     | |
| .  . | ___ | |__  ___  ___  ___ _ __
| |\/| |/ _ \| '_ \/ __|/ _ \/ _ \ '_ \
| |  | | (_) | | | \__ \  __/  __/ | | |
\_|  |_/\___/|_| |_|___/\___|\___|_| |_|
___  ___      _             _     _
|  \/  |     | |           | |   | |
| .  . |_   _| | ____ _  __| | __| | __ _ _ __ ___
| |\/| | | | | |/ / _` |/ _` |/ _` |/ _` | '_ ` _ \
| |  | | |_| |   < (_| | (_| | (_| | (_| | | | | | |
\_|  |_/\__,_|_|\_\__,_|\__,_|\__,_|\__,_|_| |_| |_|

The MIT License

Copyright (c) 2017 Mohseen Mukaddam (mohseenmukaddam6@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

//forked from https://codepen.io/stefanweck/pen/YNPdRR

/**
 * Constants
 */
const TWO_PI = Math.PI * 2;

/**
 * Application Class
 */
class Application {
	/**
	 * Application constructor
	 */
	constructor () {
		this.canvas = document.getElementById( 'canvas' );
		this.context = this
						.canvas
						.getContext( '2d' );
		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;
		this.center = {
			x: this.width / 2,
			y: this.height / 2
		};

		this.circleContainers = [];

				//Resize listener for the canvas to fill browser window dynamically
		window.addEventListener( 'resize', () => this.resizeCanvas(), false );
	}

		/**
     * Simple resize function. Reinitializes everything on the canvas while changing the width/height
     */
	resizeCanvas () {
		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;
		this.center = {
			x: this.width / 2,
			y: this.height / 2
		};

				// Empty the previous container and fill it again with new CircleContainer
				// objects
		this.circleContainers = [];
		this.initializeCircleContainers();
	}

		/**
     * Create a number of CircleContainer objects based on the numberOfContainers variable
     * @return void
     */
	initializeCircleContainers () {
		for ( let x = 0; x < this.width + 100; x += 100 ) {
			for ( let y = 0; y < this.height + 100; y += 100 ) {
								//Initialize a new instance of the CircleContainer class
				let circleContainer = new CircleContainer( this.context, x, y );

								//Let the CircleContainer initialize it's children
				circleContainer.initializeCircles();

								//Add the container to our array of CircleContainer objects
				this
										.circleContainers
										.push( circleContainer );
			}
		}
	}

		/**
     * Updates the application and every child of the application
     * @return void
     */
	update () {
		for ( let i = 0; i < this.circleContainers.length; i++ ) {
			this
								.circleContainers[i]
								.update();
		}
	}

		/**
     * Renders the application and every child of the application
     * @return void
     */
	render () {
				//Clear the entire canvas every render
		this
						.context
						.clearRect( 0, 0, this.width, this.height );

				//Trigger the render function on every child element
		for ( let i = 0; i < this.circleContainers.length; i++ ) {
			this
								.circleContainers[i]
								.render();
		}
	}

		/**
     * Update and render the application at least 60 times a second
     * @return void
     */
	loop () {
		this.update();
		this.render();

		window.requestAnimationFrame( () => this.loop() );
	}
}

/**
 * CircleContainer Class
 */
class CircleContainer {
		/**
     * CircleContainer constructor
     * @param context - The context from the canvas object of the Application
     * @param x
     * @param y
     */
	constructor ( context, x, y ) {
		this.context = context;
		this.position = {
			x,
			y
		};

		this.numberOfCircles = 13;
		this.circles = [];

		this.baseRadius = 15;
		this.bounceRadius = 130;
		this.singleSlice = TWO_PI / this.numberOfCircles;
	}

		/**
     * Create a number of Circle objects based on the numberOfCircles variable
     * @return void
     */
	initializeCircles () {
		for ( let i = 0; i < this.numberOfCircles; i++ ) {
			this
								.circles
								.push( new Circle( this.position.x, this.position.y + Math.random(), this.baseRadius, this.bounceRadius, i * this.singleSlice ) );
		}
	}

		/**
     * Try to update the application at least 60 times a second
     * @return void
     */
	update () {
		for ( let i = 0; i < this.numberOfCircles; i++ ) {
			this
								.circles[i]
								.update( this.context );
		}
	}

		/**
     * Try to render the application at least 60 times a second
     * @return void
     */
	render () {
		for ( let i = 0; i < this.numberOfCircles; i++ ) {
			this
								.circles[i]
								.render( this.context );
		}
	}
}

/**
 * Circle Class
 */
class Circle {
		/**
     * Circle constructor
     * @param x - The horizontal position of this circle
     * @param y - The vertical position of this circle
     * @param baseRadius
     * @param bounceRadius
     * @param angleCircle
     */
	constructor ( x, y, baseRadius, bounceRadius, angleCircle ) {
		this.basePosition = {
			x,
			y
		};
		this.position = {
			x,
			y
		};
		this.speed = 0.01;
		this.baseSize = 10;
		this.size = 10;
		this.angle = ( x + y );
		this.baseRadius = baseRadius;
		this.bounceRadius = bounceRadius;
		this.angleCircle = angleCircle;
	}

		/**
     * Update the position of this object
     * @return void
     */
	update () {
		this.position.x = this.basePosition.x + Math.cos( this.angleCircle ) * ( Math.sin( this.angle + this.angleCircle ) * this.bounceRadius + this.baseRadius );
		this.position.y = this.basePosition.y + Math.sin( this.angleCircle ) * ( Math.sin( this.angle + this.angleCircle ) * this.bounceRadius + this.baseRadius );
		this.size = Math.cos( this.angle ) * 8 + this.baseSize;

		this.angle += this.speed;
	}

		/**
     * Renders this Circle object on the canvas
     * @param context - The context from the canvas object of the Application
     * @return void
     */
	render ( context ) {
		context.fillStyle = `hsl(45.2, 100%, ${ this.size * 4 }%)`;
		context.beginPath();
		context.arc( this.position.x, this.position.y, this.size, 0, TWO_PI );
		context.fill();
	}
}

/**
 * Onload function is executed whenever the page is done loading, initializes the application
 */
window.onload = function () {
		//Create a new instance of the application
	const application = new Application();

		//Initialize the CircleContainer objects
	application.initializeCircleContainers();

		//Start the initial loop function for the first time
	application.loop();
};