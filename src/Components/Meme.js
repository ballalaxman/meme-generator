import React from "react";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottemText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, [setAllMemes]);
  // console.log(allMemes);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top-Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom-Text"
          name="bottemText"
          value={meme.bottemText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-block">
        <img src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottemText}</h2>
      </div>
    </div>
  );
}
