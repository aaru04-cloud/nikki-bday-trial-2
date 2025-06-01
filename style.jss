* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background: linear-gradient(135deg, pink, peachpuff);
  overflow: hidden;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.slide {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 192, 203, 0.4);
  color: white;
  text-align: center;
  padding: 20px;
}

.slide.active {
  display: block;
  animation: fade 1s ease;
}

h1 {
  margin-top: 20%;
  font-size: 3em;
}

button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
  background: hotpink;
  color: white;
  cursor: pointer;
}

button:hover {
  background: deeppink;
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
