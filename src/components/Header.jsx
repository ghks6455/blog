import "./css/Header.css";
export default function Header({ onClick }) {
  return (
    <header>
      <div>
        <a href="#top">
          <h1>홈으로</h1>
        </a>
      </div>

      <div>
        <h2>My Simple Blog</h2>
      </div>
      <div>
        <a onClick={onClick} href="#">
          <h1>글쓰기</h1>
        </a>
      </div>
    </header>
  );
}
