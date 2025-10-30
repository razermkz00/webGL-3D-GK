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

        shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
    }

    function creativeVertices(){
        vertices = [
            -0.9, -0.9, 0.0,
            0.9, -0.9, 0.0,
            0.0, 0.9, 0.0
        ];

        var buffer =gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices),
        gl.STATIC_DRAW);

        var coord = gl.getAttributLocation(shaderProgram, "coords");
        gl.vertexAttribPointer(GeolocationCoordinates, 4, gl.FLOAT, false,0,0);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        var pointSize = gl.getUniformLocation
    }

    