import CountUp from 'react-countup';
import {
  StyledONHeader,
  StyledONInfo,
  StyledONWrapper,
  StyledStatContainer,
  StyledStatCount,
  StyledStatItems,
  StyledStatText,
} from './styles';

const OurNumbers = () => {
  return (
    <StyledONWrapper>
      <StyledONHeader>Our numbers</StyledONHeader>
      <StyledONInfo>
        Handshake infographic mass market crowdfunding iteration.
      </StyledONInfo>
      <StyledStatContainer>
        <StyledStatItems>
          <StyledStatCount>
            <CountUp end={100} />m
          </StyledStatCount>
          <StyledStatText>Cool feature title</StyledStatText>
        </StyledStatItems>
        <StyledStatItems>
          <StyledStatCount>
            <CountUp end={10.0} decimals={3} />
          </StyledStatCount>
          <StyledStatText>Cool feature title</StyledStatText>
        </StyledStatItems>
        <StyledStatItems>
          <StyledStatCount>
            <CountUp end={240} />
          </StyledStatCount>
          <StyledStatText>Cool feature title</StyledStatText>
        </StyledStatItems>
      </StyledStatContainer>
    </StyledONWrapper>
  );
};

export default OurNumbers;
