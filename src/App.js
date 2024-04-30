import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App!!</h1>

        <button type="button" className="btn btn-primary">
          Primary
        </button>

        <p className="website-footer">
          This project was coded by{" "}
          <a href="https://github.com/zaidahyunos" target="blank">
            Zaidah Yunos
          </a>
          , is open-sourced on{" "}
          <a href="https://github.com/zaidahyunos/revision" target="blank">
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://resonant-raindrop-ea6d62.netlify.app" target="blank">
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
