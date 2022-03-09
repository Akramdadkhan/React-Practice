import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector ,useDispatch} from "react-redux";
const MyCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [url,setUrl]=useState()
  const [title,setTitle]=useState()
  const [dec,setDec]=useState()
  const myCarousel = useSelector((state) => state.carouselReducer.myCarousel);
  useEffect(() => {
    setCarouselData(myCarousel);
  }, [myCarousel]);
  const dispatch=useDispatch();
  const handleAdd=()=>{
      const data={
        carouselImg:url,
        carouselTitle:title,
        carouselDescription:dec
      }
  dispatch({
      type:"ADD_CAROUSEL",
      data,
  })
  }
  return (
    <div>
      <Carousel>
        {carouselData.map((itemCurrent) => {
          return (
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={itemCurrent.carouselImg}
                alt="First slide"
                style={{ height: "500px" }}
              />
              <Carousel.Caption>
                <h3>{itemCurrent.carouselTitle}</h3>
                <p>{itemCurrent.carouselDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div style={{float:"right",margin:"15px"}}>
          <input type="text" placeholder="Carousel Image Url" onChange={(e)=>setUrl(e.target.value)} />
          <input type="text" placeholder="Carousel Title" onChange={(e)=>setTitle(e.target.value)}  />
          <input type="text" placeholder="Carousel Description" onChange={(e)=>setDec(e.target.value)} />
          <button onClick={handleAdd}>Add Carousel</button>
      </div>
      
    </div>
  );
};

export default MyCarousel;