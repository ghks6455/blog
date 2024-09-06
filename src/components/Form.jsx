import { useState } from "react";
import "./css/Form.css";
export default function Form({ cl, get }) {
  const [text, setText] = useState("");

  function submit() {
    get(text);
  }

  return (
    <div className={cl}>
      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="이름"
        // value={text}
      ></textarea>
      <textarea
        placeholder="제목"
        // value={text}
      ></textarea>
      <textarea
        placeholder="내용"
        // value={text}
      ></textarea>

      <button onClick={submit}>제출</button>
    </div>
  );
}
