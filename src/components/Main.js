import React, { useEffect } from "react";
import "./Main.css";
import uuid from "react-uuid";
import { UseMuiContext } from "../context/MuiContextProvider";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const { loading, setLoading, handleClick, order } = UseMuiContext();
  const navigate = useNavigate();
  const cardArr = [
    {
      title: "Greek ",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      price: 12.99,
      imgUrl: "/greek-salad.jpg",
    },
    {
      title: "Brushetta ",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      price: 7.99,
      imgUrl: "/bruchetta.svg",
    },
    {
      title: "Grilled Fish ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      price: 12.99,
      imgUrl: "/fish.jpeg",
    },
  ];

  const cards2 = [
    {
      userName: "Micheal Caldwell",
      description: "This is the best Mediterranean food that I've ever had!",
    },
    {
      userName: "John Rosenblum",
      description: "This is the best Mediterranean food that I've ever had!",
    },
    {
      userName: "Alan Chen",
      description:
        "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    },
    {
      userName: "Casey Lau",
      description:
        "The food here was fire!! Everyone should try this place out at least once if they live in Chicago.",
    },
    {
      userName: "John Rosenblum",
      description: "This is the best Mediterranean food that I've ever had!",
    },
    {
      userName: "Jack Hu",
      description:
        "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!",
    },
  ];

  function handleClickAndTiming(item) {
    handleClick(item);

    setTimeout(() => {
      setLoading({});
      navigate("/order");
    }, 1000);
  }

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="main ">
      <div className="specials">
        <h1 className="title">This weeks specials</h1>
        <br />
        <button className="primaryButton menuBtn">
          <a href="/icons_assets/menu.webp" className="link " target="_blank">
            <h2>Online Menu</h2>
          </a>
        </button>
      </div>

      <div className="card-group  ">
        <div className="smallCards CarouselCards"></div>
        <div className="bigCards card-group">
          {cardArr.map((card, index) => {
            return (
              <div className="card" key={uuid()}>
                <img
                  alt="img"
                  className="main-img"
                  loading="lazy"
                  src={`/icons_assets/${card.imgUrl}`}
                />
                <h2 className="sub-title">{card.title}</h2>
                <h3 className="sub-title">${card.price}</h3>
                <p className="plain-text">{card.description}</p>
                <button
                  onClick={() => handleClickAndTiming(card)}
                  className="primaryButton menuBtn"
                >
                  {loading.description === card.description ? (
                    <CircularProgress size={30} />
                  ) : (
                    <p>Order for Delivery</p>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="main2">
        <h1 className="title">Testimonials</h1>
        <div className=" card-group">
          <div className="smallCards CarouselCards"></div>
          <div className="bigCards main2Cards  ">
            {cards2.map((card, index) => {
              return (
                <div
                  className="card"
                  data-aos="fade-up-right"
                  data-aos-duration={500 + index * 200}
                  key={uuid()}
                >
                  <img
                    alt="img"
                    className="card2img"
                    loading="lazy"
                    src={`/icons_assets/download.png`}
                  />
                  <h2 className="sub-title">{card.userName}</h2>
                  <p className="plain-text">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
