
    var gl, shaderProgram, vertices;

    initGL();
    createShaders();
    createVertices();
    draw();

    function initGL() {
      var canvas = document.getElementById("canvas");
      gl = canvas.getContext("webgl");
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(1, 1, 1, 1);
    }

    function createShaders() {
      var vsSource = `
        attribute vec4 coords;
        void main(void) {
          gl_Position = coords;
        }
      `;

      var fsSource = `
        precision mediump float;
        uniform vec4 color;
        void main(void) {
          gl_FragColor = color;
        }
      `;

      var vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vsSource);
      gl.compileShader(vertexShader);

      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fsSource);
      gl.compileShader(fragmentShader);

      shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      gl.useProgram(shaderProgram);
    }

    function createVertices() {
      // Dua bentuk garis: V dan A
      vertices = new Float32Array([
        // Huruf V
        -0.8,  0.6, 0,
        -0.7, -0.6, 0,
        -0.6,  0.6, 0,

        // Huruf A
        0.4, -0.6, 0,
        0.5,  0.6, 0,
        0.6, -0.6, 0
      ]);

      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      var coords = gl.getAttribLocation(shaderProgram, "coords");
      gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(coords);

      var color = gl.getUniformLocation(shaderProgram, "color");
      gl.uniform4f(color, 1, 0, 0, 1); // warna hitam
    }

    function draw() {
      gl.clear(gl.COLOR_BUFFER_BIT);
      // gambar huruf V (3 titik pertama)
      gl.drawArrays(gl.LINE_STRIP, 0, 3);
      // gambar huruf A (3 titik berikutnya)
      gl.drawArrays(gl.LINE_STRIP, 3, 3);
    }