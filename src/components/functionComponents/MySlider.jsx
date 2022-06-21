import { Carousel } from 'react-bootstrap';

export const MySlider = ({ carouselItems }) => {


    return (
        <Carousel>
            {
                carouselItems.map(item => {
                    console.log(item);
                    return (
                        <Carousel.Item key={item.id}>
                            <img
                                src={item.img}
                                alt="First slide"
                            />

                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}










