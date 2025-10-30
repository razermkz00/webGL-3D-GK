var gl, shaderProgram;

    initGL();
    createShaders();
    draw();

    function initGL() {
      var canvas = document.getElementById("canvas");
      console.log(canvas);
      gl = canvas.getContext("webgl");

      // Cek apakah WebGL tersedia
      if (!gl) {
        alert("WebGL tidak tersedia di browser ini");
        return;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(1, 1, 1, 1); // warna background putih
    }

    function createShaders() {
      // Vertex Shader
      var vs = "";
      vs += "void main(void) {";
      vs += " gl_Position = vec4(0.0, 0.0, 0.0, 1.0);"; // posisi titik di tengah
      vs += " gl_PointSize = 100.0;"; // ukuran titik
      vs += "}";

      var vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vs);
      gl.compileShader(vertexShader);

      // Fragment Shader
      var fs = "";
      fs += "void main(void) {";
      fs += " gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);"; // warna merah
      fs += "}";

      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fs);
      gl.compileShader(fragmentShader);

      // Program Shader
      shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      gl.useProgram(shaderProgram);
    }

    function draw() {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINTS, 0, 1); // gambar 1 titik
    }