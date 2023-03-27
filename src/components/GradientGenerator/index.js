import {Component} from 'react'

import {
  AppContainer,
  Heading,
  SubHeading,
  UnOrderListGradientItem,
  ColorsContainer,
  CustomContainer,
  CustomColor,
  CustomColorInput,
  CustomButton,
  ButtonContainer,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onGenerate = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state

    this.setState({
      gradientValue: `to ${activeGradientDirection},${firstColor},${secondColor}`,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      activeGradientDirection,
      gradientValue,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <UnOrderListGradientItem>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              key={eachGradient.directionId}
              value={eachGradient.directionId}
              gradientItemDetails={eachGradient}
              isActive={eachGradient.directionId === activeGradientDirection}
              clickDirection={this.onClickDirection}
            />
          ))}
        </UnOrderListGradientItem>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorsContainer>
          <CustomContainer>
            <CustomColor>{firstColor}</CustomColor>
            <CustomColorInput
              type="color"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </CustomContainer>
          <CustomContainer>
            <CustomColor>{secondColor}</CustomColor>
            <CustomColorInput
              type="color"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </CustomContainer>
        </ColorsContainer>
        <ButtonContainer>
          <CustomButton type="button" onClick={this.onGenerate}>
            Generate
          </CustomButton>
        </ButtonContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
