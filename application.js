/*
base class for applications
*/

export class Application{

    constructor(canvas){
        this.canvas = canvas;
        //clean canvas before loading app
        while(canvas.lastChild){
            canvas.removeChild(canvas.lastChild);
        }
        this.initialize();
    }

    initialize() {}

    draw(){}
}

export default Application;