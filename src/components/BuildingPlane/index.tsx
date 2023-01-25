import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from "next/image";
import {unoptimizedImages} from "../../constants/unoptimizedImages";

const BuildingSlider = ({data}) => {
    return <BuildingSliderContainer>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
        >
            {
                data?.floorPlan?.map( (i: any, k: number) =>
                    <SwiperSlide key={k}>
                        <SwiperSlideContainer>
                            <Image unoptimized={unoptimizedImages} alt={data.title} src={i} fill />
                        </SwiperSlideContainer>
                    </SwiperSlide>
                )
            }
        </Swiper>
    </BuildingSliderContainer>
}

const BuildingSliderContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 191px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SwiperSlideContainer = styled.div`
  height: calc(100vh - 191px);
  width: 100%;
  img {
    width: 100%;
    height: calc(100vh - 191px);
    position: relative !important;
    object-fit: contain;
  }
`;

export default BuildingSlider
