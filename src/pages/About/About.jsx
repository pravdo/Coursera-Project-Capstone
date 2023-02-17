import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main className="content100vh">
        <div>
          <header>
            <h1 className="abouth1 title">About Us</h1>
          </header>
          <img
            alt="img"
            className="about-img"
            src="/icons_assets/restauranfood.jpg"
            loading="lazy"
          ></img>
        </div>
        <div style={{ padding: "20px 40px" }}>
          <h1 className="title" style={{ textAlign: "center" }}>
            Litle Lemon Restaurant
          </h1>
          <p className="plain-text" style={{ textAlign: "justify" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            minus itaque cum dolorem voluptatem maiores dolores tenetur
            quibusdam delectus rem sapiente, optio totam nesciunt consequatur
            cupiditate autem culpa labore deleniti! Repellat veritatis,
            temporibus ducimus quibusdam incidunt asperiores facilis ipsum
            adipisci doloremque reprehenderit ipsam nam beatae magnam nesciunt
            natus amet voluptate voluptatibus ad ab! Dolores magnam cum, eos
            similique ipsum autem. Delectus fuga veritatis earum voluptate magni
            quibusdam adipisci facilis vitae nemo maxime, harum animi nostrum
            eveniet hic minima minus assumenda temporibus pariatur ipsum cum.
            Non quaerat perferendis nulla numquam rem. Unde, debitis hic
            perspiciatis a quod nisi tempore maxime ea doloremque illum quae
            deleniti aspernatur earum quaerat sapiente, doloribus fugiat sit eos
            provident odit molestiae culpa cum natus? Reprehenderit, dolor.
            Impedit repudiandae distinctio aut! Voluptatum blanditiis nam
            cupiditate sapiente vitae provident. Animi illo perferendis
            similique nihil dolorem assumenda temporibus. Eius cumque beatae qui
            tempore expedita, ab sunt non ipsa accusantium.
            <br></br>
            <br></br>
            Nostrum ex iusto ducimus fugiat neque praesentium facilis. Expedita
            quas sint aspernatur repellat eius harum quos animi voluptatum, amet
            est, dicta ducimus nisi quisquam neque reprehenderit et, itaque quam
            provident! Blanditiis voluptas earum distinctio deleniti voluptate
            omnis quidem dolorem fugit mollitia reprehenderit tempora eos aut
            totam quae illum esse nihil cumque ullam, harum numquam explicabo
            corporis repudiandae iure porro! Quasi?
            <br></br>
            <br></br>
            Enim ut impedit facilis eligendi minima illum. Eveniet aspernatur
            voluptas architecto facilis explicabo ipsa rem illo id perferendis
            adipisci omnis velit, esse fugit itaque, asperiores tenetur sit
            cumque minima veritatis? Quam ipsam officiis eos ex soluta, optio
            provident repellendus, eveniet ipsa alias odit voluptas libero
            dolore, obcaecati distinctio vero tempore? Beatae, nemo labore
            blanditiis earum non architecto maiores aliquid eaque. Reiciendis
            eum aliquid doloribus exercitationem, eaque numquam id a fugiat quis
            repellat. Sit consectetur aut repudiandae accusantium accusamus
            enim, voluptate error praesentium obcaecati fuga, illo ex ipsa?
            Dolorum, sit ea.
          </p>
          <br></br>
          <br></br>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
