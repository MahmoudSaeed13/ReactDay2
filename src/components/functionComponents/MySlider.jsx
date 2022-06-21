import { Carousel } from "react-bootstrap";

export const MySlider = (props) => {

        return(
            <Carousel.Item>
            <img
            src={props.imgSrc}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>{props.caption}</h3>
            <p>{props.des}</p>
            </Carousel.Caption>
            </Carousel.Item>
        )                          
}










{/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={details.img}
                        alt="Second slide"
                        />
        
                        <Carousel.Caption>
                        <h3>{details.Caption}</h3>
                        <p>{details.des}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static3.depositphotos.com/1005844/212/i/600/depositphotos_2121675-stock-photo-step-stones.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>{details.Caption}</h3>
                        <p>{details.des}</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}