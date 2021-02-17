import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isim, setIsim] = useState("");
  const [hata, setHata] = useState("");

  const handleChange = (event) => setIsim(event.target.value);

  const handleSubmit = (isim) => {
    isim.length < 3
      ? setHata("En az 3 karakter girmelisiniz")
      : setHata("Giriş Başarılı");
  };
  return (
    <div className="App">
      <h1>LOGIN</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={isim}
        onChange={handleChange}
      ></input>{" "}
      <br />
      <button
        className="button"
        onClick={() => {
          handleSubmit(isim);
        }}
      >
        Log-in
      </button>
      <br />
      {hata}
    </div>
  );
}
