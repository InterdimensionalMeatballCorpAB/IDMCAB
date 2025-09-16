
const colors = ['red', 'green', 'blue', 'white', 'yellow', 'purple', 'black'];
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
    const currentColorIndex = colors.indexOf(fank.style.fill);
    fank.style.fill = colors[(currentColorIndex + 1) % colors.length];
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