import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function App() {
  const slideRef  = useRef(null)

  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/5y48LXdY/collage-with-people-boat-jellyfish.jpg",
      des: "Some beautiful roads cannot be discovered without getting loss.",
      title: "Explore Nature",
      color: "#000"
    },
    {
      id: 2,
      img: "https://i.postimg.cc/gjNWgTwc/collage-with-statue-meadow.jpg",
      des: "Some beautiful roads cannot be discovered without getting loss.",
      title: "Explore Nature",
      color: "#afa1ff"
    },
    {
      id: 3,
      img: "https://i.postimg.cc/SQGpG7xP/cute-cat-laying-grass.jpg",
      des: "Some beautiful roads cannot be discovered without getting loss.",
      title: "Explore Nature",
      color: "#b7b526"
    },
    {
      id: 4,
      img: "https://i.postimg.cc/wjnKBww1/full-shot-astronaut-nature-collage.jpg",
      des: "Some beautiful roads cannot be discovered without getting loss.",
      title: "Explore Nature",
      color: "#b9b656"
    }
  ]

  const handleClickNext = () => {
    const cards = document.querySelectorAll('.card')
    slideRef.current.appendChild(cards[0])
    console.log(slideRef.current.appendChild(cards[0]))
    console.log(cards)
  }

  const handleClickPrev = () => {
    const cards = document.querySelectorAll('.card')
    slideRef.current.prepend(cards[cards.length - 1])
  }


  return (
    <div className="container">
      <div id="slide" ref={slideRef}>
        {data && data.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={handleClickNext}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="content" style={{color: `${card.color}`}}>
              <h2 className="name">{card.title}</h2>
              <p className="des">{card.des}</p>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default App;
