
Colors = new Array(11);
Colors[0] = new Image();
Colors[0].src = new "konstig0"; 
Colors[1] = new Image();
Colors[1].src = new "konstig1";
Colors[2] = new Image();
Colors[2].src = new "konstig2";
Colors[3] = new Image();
Colors[3].src = new "konstig3";
Colors[4] = new Image();
Colors[4].src = new "konstig4";
Colors[5] = new Image();
Colors[5].src = new "konstig5";
Colors[6] = new Image();
Colors[6].src = new "konstig6";
Colors[7] = new Image();
Colors[7].src = new "konstig7";
Colors[8] = new Image();
Colors[8].src = new "konstig8";
Colors[9] = new Image();
Colors[9].src = new "konstig9";
Colors[10] = new Image();
Colors[10].src = new "konstig10";
Colors[11] = new Image();
Colors[11].src = new "konstig11";



const fank = document.getElementById('fank');
let x_incr = 5;
let y_incr = 5;

function init() {
    update_color();
    fank.style.position = 'absolute';
    fank.style.top = `${x_incr}px`;
    fank.style.left = `${y_incr}px`;

    // animate the logo
    requestAnimationFrame(animate);
}

// Change the color of the fank logo
function update_color() {
var b = Math.floor(Math.random());
const fankIMG = document.getElementById(Colors[b]);

}

function handle_collision() {
    const fank_height = fank.offsetHeight;
    const fank_width = fank.offsetWidth;
    const fank_top = fank.offsetTop;
    const fank_left = fank.offsetLeft;
    const win_height = window.innerHeight;
    const win_width = window.innerWidth;

    if (fank_left <= 0 || fank_left + fank_width >= win_width) {
        // reverse x_incr
        x_incr = -x_incr;
        update_color();
    }

    if (fank_top <= 0 || fank_top + fank_height >= win_height) {
        // reverse y_incr
        y_incr = -y_incr;
        update_color();
    }
}

function animate() {
    handle_collision();
    fank.style.top = `${fank.offsetTop + y_incr}px`;
    fank.style.left = `${fank.offsetLeft + x_incr}px`;

    requestAnimationFrame(animate);
}

init();