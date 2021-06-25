import React from "react"
import Layout from "../Layout";
import Carousel from 'react-bootstrap/Carousel'

function Clasesonline(props) {


    return(

        <div>
            <Layout>



            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../assets/marca1.png"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../assets/marca2.png"
      
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../assets/marca3.png"
    />
  </Carousel.Item>
</Carousel>

            </Layout>
        </div>
    )
    
}
export default Clasesonline;
