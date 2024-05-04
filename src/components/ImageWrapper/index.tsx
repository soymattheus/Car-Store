import React from "react";
import styled from "styled-components";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding: 10px;
`;

const Wrapper = styled.div`
  flex: 0 0 auto;
  width: 33.3%;
  margin-right: 0px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  min-height: 15em;
  max-height: 15em;
  scroll-snap-align: start;
`;

const Button = styled.button`
  display: flex;
  width: 3em;
  height: 3em;
  position: absolute;
  background-color: #ff6600da;
  border: none;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface ICarImages {
  id: string;
  url: string;
}

interface ImageWrapperProps {
  images: ICarImages[];
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({ images }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = (event: any) => {
    const { scrollLeft } = event.target;
    setScrollPosition(scrollLeft);
  };

  const nextImage = () => {
    const container = document.getElementById("image-slider-container");
    if (container) {
      container.scrollLeft += container.offsetWidth;
    }
  };

  const prevImage = () => {
    const container = document.getElementById("image-slider-container");
    if (container) {
      container.scrollLeft -= container.offsetWidth;
    }
  };

  return (
    <div>
      <Container id="image-slider-container" onScroll={handleScroll}>
        {images.map((image: ICarImages, index: number) => (
          <Wrapper key={index}>
            <Image src={image.url} alt={`Imagem ${index + 1}`} />
          </Wrapper>
        ))}
      </Container>

      <Button style={{ top: "25%", left: "10px" }} onClick={prevImage}>
        <FaChevronLeft
          style={{
            color: "#fff",
            height: "3.5em",
          }}
          onClick={prevImage}
        />
      </Button>

      <Button style={{ top: "25%", right: "10px" }} onClick={nextImage}>
        <FaChevronRight
          style={{
            color: "#fff",
            height: "3.5em",
          }}
          onClick={nextImage}
        />
      </Button>
    </div>
  );
};
