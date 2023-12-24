let myp5 = new p5(( s ) => {

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
    };

    s.draw = () => {
        s.background(0);
    };

}, document.getElementById('p5sketch'));