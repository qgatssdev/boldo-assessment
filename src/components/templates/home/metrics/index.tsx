import { CheckMark } from 'components/atoms/icons';
import { Button } from 'components/atoms/button';
import {
  StyledMetricContainer,
  StyledContainer,
  StyledImageContainerOne,
  StyledRelativeContainer,
  StyledImage,
  StyledBarChart,
  StyledImageContainerTwo,
  StyledRelativeContainerTwo,
  StyledHeading,
  StyledListContainer,
  StyledListItems,
  StyledButtonContainer,
  StyledConnectContainerOne,
  StyledBarsContainer,
  StyledBar,
  StyledBarWhite,
  StyledPieChart,
  StyledImageTwo,
} from './styles';

const Metrics = () => {
  return (
    <StyledMetricContainer>
      <StyledContainer>
        <StyledImageContainerOne>
          <StyledRelativeContainer>
            <StyledImage
              src={require('assets/Rectangle 1270.png')}
              alt='phone-call'
            />
            <StyledBarChart
              src={require('assets/Group 209.png')}
              alt='bar-chart'
            />
          </StyledRelativeContainer>
        </StyledImageContainerOne>
        <StyledImageContainerTwo>
          <StyledRelativeContainerTwo>
            <StyledHeading>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </StyledHeading>
            <StyledListContainer>
              <StyledListItems>
                <CheckMark /> We connect our customers with the best.
              </StyledListItems>
              <StyledListItems>
                <CheckMark /> Advisor success customer launch party.
              </StyledListItems>
              <StyledListItems>
                <CheckMark /> Advisor success customer launch party.
              </StyledListItems>
            </StyledListContainer>
            <StyledButtonContainer>
              <Button size='md' label='Start now' />
            </StyledButtonContainer>
          </StyledRelativeContainerTwo>
        </StyledImageContainerTwo>
      </StyledContainer>
      <StyledContainer>
        <StyledImageContainerOne>
          <StyledConnectContainerOne>
            <StyledHeading>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </StyledHeading>
            <StyledBarsContainer>
              <StyledBar>
                <img
                  src={require('assets/feather.svg').default}
                  alt='feather'
                />
                We connect our customers with the best.
              </StyledBar>
              <StyledBarWhite>
                <img src={require('assets/eye.svg').default} alt='eye' />
                Adivsor success customer launch party.
              </StyledBarWhite>
              <StyledBarWhite>
                <img src={require('assets/sun.svg').default} alt='sun' />
                Business-to-consumer long tail
              </StyledBarWhite>
            </StyledBarsContainer>
          </StyledConnectContainerOne>
        </StyledImageContainerOne>
        <StyledImageContainerOne>
          <StyledRelativeContainer>
            <StyledImageTwo
              src={require('assets/Rectangle 1270 woman.png')}
              alt='phone-call'
            />
            <StyledPieChart
              src={require('assets/Group 222.png')}
              alt='pie-chart'
            />
          </StyledRelativeContainer>
        </StyledImageContainerOne>
      </StyledContainer>
    </StyledMetricContainer>
  );
};

export default Metrics;
