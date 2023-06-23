import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const rotate = keyframes`
0% { -webkit-transform: rotate(0deg); transform: rotate(0deg);}    
100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);}
`

export const Base = styled.div`
  position: absolute;
  top: 15%;
  left: 25%;
  margin: auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fffc00;
  opacity: 0.9;
  box-shadow: 0px 0px 40px 15px #fffc00;
`

export const RayBox = styled.div`
  position: absolute;
  margin: auto;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70px;
  -webkit-animation: ${rotate} 120s linear infinite;
  animation: ${rotate} 120s linear infinite;
`

export const Ray = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(255, 252, 0, 0) 0%,
    rgba(255, 252, 0, 0.8) 50%,
    rgba(255, 252, 0, 0) 100%
  );
  background: linear-gradient(
    top,
    rgba(255, 252, 0, 0) 0%,
    rgba(255, 252, 0, 0.8) 50%,
    rgba(255, 252, 0, 0) 100%
  );
  margin-left: 10px;
  border-radius: 80% 80% 0 0;
  position: absolute;
  opacity: 0.2;
`

export const Ray1 = styled(Ray)`
  height: 170px;
  width: 30px;
  -webkit-transform: rotate(180deg);
  top: -175px;
  left: 15px;
`

export const Ray2 = styled(Ray)`
  height: 100px;
  width: 8px;
  -webkit-transform: rotate(220deg);
  top: -90px;
  left: 75px;
`

export const Ray3 = styled(Ray)`
  height: 170px;
  width: 50px;
  -webkit-transform: rotate(250deg);
  top: -80px;
  left: 100px;
`

export const Ray4 = styled(Ray)`
  height: 120px;
  width: 14px;
  -webkit-transform: rotate(305deg);
  top: 30px;
  left: 100px;
`

export const Ray5 = styled(Ray)`
  height: 140px;
  width: 30px;
  -webkit-transform: rotate(-15deg);
  top: 60px;
  left: 40px;
`

export const Ray6 = styled(Ray)`
  height: 90px;
  width: 50px;
  -webkit-transform: rotate(30deg);
  top: 60px;
  left: -40px;
`
export const Ray7 = styled(Ray)`
  height: 180px;
  width: 10px;
  -webkit-transform: rotate(70deg);
  top: -35px;
  left: -40px;
`
export const Ray8 = styled(Ray)`
  height: 120px;
  width: 30px;
  -webkit-transform: rotate(100deg);
  top: -45px;
  left: -90px;
`
export const Ray9 = styled(Ray)`
  height: 80px;
  width: 10px;
  -webkit-transform: rotate(120deg);
  top: -65px;
  left: -60px;
`
export const Ray10 = styled(Ray)`
  height: 190px;
  width: 23px;
  -webkit-transform: rotate(150deg);
  top: -185px;
  left: -60px;
`
