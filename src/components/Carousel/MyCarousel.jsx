import Carousel from "react-bootstrap/Carousel";
import "../../App.css";
function MyCarousel() {
  return (
    <Carousel style={{ width: "80vw", height: "80vh", marginInline: "auto" }}>
      <Carousel.Item>
        <img
          style={{ width: "80vw", height: "80vh" }}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/11/06/23/39/climate-change-issue-7575216_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "80vw", height: "80vh" }}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/10/24/14/00/women-7543526_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "80vw", height: "80vh" }}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/12/12/06/35/leaves-7650272_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
