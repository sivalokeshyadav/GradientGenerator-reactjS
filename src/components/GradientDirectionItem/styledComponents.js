// Style your elements here
import styled from 'styled-components'

export const ListContainer = styled.li`
width: 49%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;

`

export const CustomButton = styled.button`
  background-color: #ffffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: 0.5;
  border-radius: 15px;
  padding: 20px;
  margin: 30px;
`
