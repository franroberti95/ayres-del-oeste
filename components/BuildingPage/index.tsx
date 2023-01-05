// import Swiper core and required modules
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { BuildingI } from '../Building';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const Building = ({building}: {building: BuildingI}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const images = building.images.sort( (a,b)=>a.value>b.value? 1:-1 );
  return <SwiperContainer>

<Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          images.map( (i,k) => 
            <SwiperSlide key={k} onClick={()=>setDialogOpen()}>
              <img src={i.photo} />
            </SwiperSlide>
          )
        }
</Swiper>
      {
        building.images.length > 1 ?
        
 <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={typeof window !== "undefined" && window.innerWidth  <= 768 ? 2:4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
    {
      images.map( (i,k) => 
        <SwiperSlide key={k}>
          <img src={i.photo}/>
        </SwiperSlide>
      )
    }
</Swiper>
        :null
      }


    <Dialog fullScreen onClose={()=>setDialogOpen(false)} open={dialogOpen}>
      <CrossContainer onClick={()=>setDialogOpen(false)}>
        <CloseIcon style={{color: 'white', height: '5vh', width: '5vh' }}></CloseIcon>
      </CrossContainer>
<Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        keyboard={{
          enabled: true,
        }}
        
        spaceBetween={10}
        navigation={true} 
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        {
          images.map( (i,k) => 
            <SwiperSlide key={k}>
            
              <DialogImage src={i.photo}>
              </DialogImage>  
            </SwiperSlide>
          )
        }
</Swiper>
    </Dialog>
  </SwiperContainer>
};

const CrossContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
  z-index:10;
  border-radius: 50%;
  background-color: #93919166;
  display: flex;
  align-items: center;
  height: 5vh;
   width: 5vh;


`;

const DialogImage = styled.img`
  max-height: 100vh;
  max-width: 100vw;
`

 const BuildingContainer = styled.div`
  padding: 5px;
  margin-bottom: 55px;
  height: 100%;
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  background-image: url('${props => props.image}');
`;

const SwiperContainer = styled.div`
max-height: 80vh;
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: black;
  /* Center slide text vertica  lly */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  cursor: pointer;
}

.swiper-slide img {
  display: block;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background: #23b3a7;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  background: #23b3a7;
}

.mySwiper2 {
  height: 50vh;
  width: 100%;
  background: #23b3a7;
}

.mySwiper {
  height: 20vh;
  box-sizing: border-box;
  padding: 10px 0;
  background: #23b3a7;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
  background: #23b3a7;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
   background: #23b3a7;
}

`;

export default Building