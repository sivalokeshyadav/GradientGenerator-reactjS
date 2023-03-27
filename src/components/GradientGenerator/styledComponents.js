// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
`

export const SubHeading = styled.p`
  color: #ffffff;
  text-align: center;
`

export const UnOrderListGradientItem = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CustomColor = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const CustomButton = styled.button`
  color: #334155;
  background-color: #00c9b7;
  padding: 30px;
  border-radius: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
