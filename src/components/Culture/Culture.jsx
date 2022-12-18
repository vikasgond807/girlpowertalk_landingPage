import React from "react";
import "./culture.css";
const Culture = () => {
  return (
    <div
      style={{
        display: "flex",
        paddingInline: "100px",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flexBasis: "600px" }}>
        <h1 style={{ paddingTop: "20px" }}>Our Unique Culture</h1>
        <p style={{ paddingTop: "20px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          tenetur fugiat animi autem distinctio quas ab? Blanditiis ullam
          voluptatum saepe fugiat est. Adipisci, quidem nemo saepe nulla maiores
          explicabo dolore molestias voluptatum sunt, vero velit eveniet
          incidunt odit iusto tempora, neque animi temporibus doloribus
          perspiciatis voluptatem sequi aperiam maxime consequatur? Ducimus
          optio ratione cumque tenetur asperiores delectus molestias eveniet
          voluptates, nesciunt, eos et soluta est voluptatem natus, tempora
          similique molestiae praesentium distinctio. Est optio debitis dolores
          assumenda odit natus nihil?
        </p>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <img
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/06/Muskan.png"
          />
          <img
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/06/Muskan.png"
          />
        </div>
        <div style={{ display: "flex" }}>
          <img
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/06/Muskan.png"
          />
          <img
            className="cultureImage"
            src="https://girlpowertalk.com/wp-content/uploads/2022/06/Muskan.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Culture;
