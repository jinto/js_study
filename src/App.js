class TestClass {
  ff() {
    console.log("ACONSOLE");
  }
}

//const js = import("../node_modules/@jaypark/hello-wasm/hello_wasm.js");
//js.then(js => {
  //js.greet("웹어셈블리");
//});


function App() {
  const el = document.querySelector("#testblock");
  el.innerHTML = "이렇게 하고 저장하면?";
  console.log("ABB");
  (new TestClass()).ff();
}

export default App;
