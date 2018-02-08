init();

function init() {
    const canvas = document.querySelector('#webGLTestCanvas');
    const gl = canvas.getContext("webgl");

    if (!gl) {
        document.body.removeChild(canvas);
        error('Your browser/PC Doesn\'t support webGL.','error');
        return;
    };
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
};

function error(string, type) {
    var error = document.querySelector('#error');
    error.className = type;
    error.innerHTML = string;
};