class TestClass {
  ff() {
    console.log("ACONSOLE");
  }
}

function App() {
  const el = document.querySelector("#testblock");
  el.innerHTML = "이렇게 하고 저장하면?";
  console.log("ABB");
  (new TestClass()).ff();
}

export default App;
