import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/functionComponents/MyNav';
import { MyFooter } from './components/functionComponents/MyFooter';
import { MySlider } from './components/functionComponents/MySlider';
import MyCounter from './components/MyCounter';
import { MyCard } from './components/functionComponents/MyCard';
import { Carousel } from 'react-bootstrap';


function App() {
  let carouselItems=[
        {
          id:1,
        img:"https://st4.depositphotos.com/14923826/22202/i/450/depositphotos_222027438-stock-photo-stones-pebbles-stack-harmony-balance.jpg",
        caption: "caption image 1",
        des: "description of image 1"  
        },
        {
          id:2,
          img: "https://static6.depositphotos.com/1002941/594/i/600/depositphotos_5945152-stock-photo-row-of-stones-in-water.jpghttps://m.facebook.com/BeautifulNatureOfficialPage/photos/?ref=page_internal&mt_nav=0",
          caption: "caption image 2",
          des: "description of image 2"
        },
        {
          id:3,
          img: "https://static3.depositphotos.com/1005844/212/i/600/depositphotos_2121675-stock-photo-step-stones.jpg",
          caption: "caption image 2",
          des: "description of image 2"
        }
        ]
  let product = [
          {
            id:1, title:"product 1", linkTitle:"but P1",bgColor:"bg-dark",price:"20$", 
          },
          {
            id:2, title:"product 2", linkTitle:"but P2",bgColor:"bg-success",price:"50$", 
            
          },
          {
            id:3, title:"product 3", linkTitle:"but P3",bgColor:"bg-danger",price:"70$", 
          },
          {
            id:4, title:"product 4", linkTitle:"but P4",bgColor:"bg-dark",price:"80$", 
      
          },
          {
            id:5, title:"product 5", linkTitle:"but P5",bgColor:"bg-dark",price:"80$", 
      
          }
        ]


  return (
    <div>
      {/* NAvbar */}
      <MyNav />

      {/* Slider */}
      {/* <div className='container'>
        <div className='row'>
          <div className='col my-3'>
            <MySlider />  
          </div>  
        </div>
      </div>  */}
      <div className="container">
          <div className="row">
              <div className='col'>  
            <Carousel>
            {
                carouselItems.map((item, index) => { 
                return (
                    
                  <MySlider key={item.id} imgSrc={item.img} caption={item.caption} des={item.des} />
                )
                })
              }
            </Carousel>
            </div>
          </div>      
      </div>

      {/* cards */}
      <div className="container">
            <div className="row">
              {
                product.map((item, index) => { 
   
                return (  
                  <MyCard key={item.id} title={item.title} linkTitle={item.linkTitle} price={item.price}/>
                )
                })
              }
            </div>
      </div>

      {/* counter */}
      <MyCounter />
      {/* footer */}
      <MyFooter/>
    </div>

  );
}

export default App;
