import {ListContainer, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {clickDirection, isActive, gradientItemDetails} = props
  const {value, displayText} = gradientItemDetails
  const onClickItemDirection = () => {
    clickDirection(value)
  }

  return (
    <ListContainer>
      <CustomButton
        type="button"
        isActive={isActive}
        onClick={onClickItemDirection}
      >
        {displayText}
      </CustomButton>
    </ListContainer>
  )
}
export default GradientDirectionItem
