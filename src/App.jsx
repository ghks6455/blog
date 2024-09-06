import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState(false);
  const [content, setContent] = useState("");
  console.log(content);
  function click() {
    setData(!data);
  }

  return (
    <>
      <Header onClick={click} />

      <main>
        <Form
          onClick={click}
          cl={data === false ? "hidden" : "block"}
          get={setContent}
        />
        <Main cl={data === false ? "block" : "hidden"} />
      </main>
      <Footer />
    </>
  );
}

export default App;
