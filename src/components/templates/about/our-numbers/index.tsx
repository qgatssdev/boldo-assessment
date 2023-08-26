import { StyledONHeader, StyledONInfo, StyledONWrapper, StyledStatContainer, StyledStatCount, StyledStatItems, StyledStatText } from "./styles"

const OurNumbers = () => {
  return (
    <StyledONWrapper>
      <StyledONHeader>Our numbers</StyledONHeader>
      <StyledONInfo>Handshake infographic mass market crowdfunding iteration.</StyledONInfo>
      <StyledStatContainer>
        <StyledStatItems>
          <StyledStatCount>120m</StyledStatCount>
          <StyledStatText>Cool feature title</StyledStatText>
        </StyledStatItems>
        <StyledStatItems>
        <StyledStatCount>10.000</StyledStatCount>
          <StyledStatText>Cool feature title</StyledStatText>
        </StyledStatItems>
        <StyledStatItems>
        <StyledStatCount>240</StyledStatCount>
          <StyledStatText>Cool feature title</StyledStatText>
        </StyledStatItems>
      </StyledStatContainer>
    </StyledONWrapper>
  )
}

export default OurNumbers