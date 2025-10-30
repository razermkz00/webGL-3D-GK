var gl,
    shaderProgram,
    vertices;

    initGL();
    createShaders();
    createVertices();
    draw();

    function initGL(){
        var canvas = document.getElementById("canvas");
        console.log(canvas);
        gl = canvas.getContext("webGL");
        gl.viewport(0, 0, canvas.clientWidth, canvas.height);
        gl.clearColor(1,1,1,1);
    }

    function createShaders(){
        var vertexShader = getShader(gl, "shader-vs");
        var fragmentShader = getShader(gl, "shader-fs");
    }

    shaderProgram = gl.c