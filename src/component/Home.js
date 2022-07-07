import React from 'react'
import styled from 'styled-components'

const Mainbg = styled.div`
  background: #D0D7DF;
`

const MainBlock = styled.div`
  background: #2B3849;
  max-width: 950px;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
`

const Block = styled.section`
  &:first-child{
    margin-top: 200px;
  }
  @media only screen and (max-width: 1199px) {
    &:first-child{
      margin-top: 100px;
    }
    padding: 15px;
  }
`
const Blockbg = styled.div`
  height: 400px;
  width: calc(100% + 150px);
  background: ${props => props.theme.bg};
  margin-bottom: 100px;
  flex: none;
  opacity: 0.9;
  margin-left: ${props => props.theme.marginLeft};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`
Blockbg.defaultProps = {
  theme: {
    bg: "#B2F05E",
    marginLeft: "-50px"
  }
}
const sectionBg2 = {
  bg: "#E3689E",
  marginLeft: "-100px"
};

const Blockcontent = styled.div`
  min-height: 400px;
  width: 400px;
  background: #FFF;
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.theme.margin};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media only screen and (max-width: 1199px) {
    position: static;
    width: 100%;
    margin: 0;
  }
`
Blockcontent.defaultProps = {
  theme: {
    margin: "-50px 0 0 -100px"
  }
}
const sectionC2 = {
  margin: "50px 0 0 -50px"
};

const Blockimage = styled.div`
  background-image: ${props => props.theme.image};
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  position: absolute;
  z-index: 3;
  margin: ${props => props.theme.margin};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media only screen and (max-width: 1199px) {
    position: static;
    width: 100%;
    margin: 0;
    height: 400px;
  }
`

Blockimage.defaultProps = {
  theme: {
    width: "700px",
    height: "500px",
    image: "url(https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg)",
    margin: "-100px 0 0 300px"
  }
}
const sectionI2 = {
  width: "700px",
  height: "450px",
  image: "url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg)",
  margin: "-50px 0 0 250px"
};


export const Home = () => {
  return (
    <>
      <Mainbg>
        <MainBlock>
          <Block>
            <Blockcontent>
              <h2>Job</h2>
            </Blockcontent>
            <Blockimage></Blockimage>
            <Blockbg></Blockbg>
          </Block>
          
          <Block>
            <Blockcontent theme={sectionC2}>
              <h2>Job</h2>
            </Blockcontent>
            <Blockimage theme={sectionI2}></Blockimage>
            <Blockbg theme={sectionBg2}></Blockbg>
          </Block>
        </MainBlock>
      </Mainbg>
    </>
  )
}
