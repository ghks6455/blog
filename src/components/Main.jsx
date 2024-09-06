import data from "../data";
import "./css/Main.css";
export default function Main({ cl }) {
  return (
    <>
      {data.map((content) => {
        return (
          <section className={"blog-container " + cl} key={content.id}>
            <h3>{content.title}</h3>
            <h4>{content.content}</h4>
            <span>
              <p>{content.publishedDate}</p>
              <p>{content.author}</p>
            </span>
          </section>
        );
      })}
    </>
  );
}
