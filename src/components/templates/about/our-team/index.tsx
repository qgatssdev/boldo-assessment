import { teams } from 'mockdata/teams';
import {
  StyledGMContainer,
  StyledGMImage,
  StyledGMItem,
  StyledInfo,
  StyledInfosContainer,
  StyledMContainer,
  StyledMImage,
  StyledMItem,
  StyledName,
  StyledOTContainer,
  StyledSubtitle,
  StyledTextHeading,
  StyledTextsContainer,
  StyledTitle,
} from './styles';

const OurTeam = () => {
  return (
    <StyledOTContainer>
      <StyledTextsContainer>
        <StyledTextHeading>Our team</StyledTextHeading>
        <StyledSubtitle data-animation='header'>The people behind the work</StyledSubtitle>
        <StyledInfo data-animation='paragraph'>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </StyledInfo>
      </StyledTextsContainer>
      <StyledGMContainer>
        {teams.generalManagers.map((manager) => (
          <StyledGMItem key={manager.id}>
            <StyledGMImage src={manager.image} alt={manager.name} />
            <StyledName>{manager.name}</StyledName>
            <StyledTitle>{manager.title}</StyledTitle>
          </StyledGMItem>
        ))}
      </StyledGMContainer>
      <StyledMContainer>
        {
          teams.managers.map((manager) => (
            <StyledMItem key={manager.id}>
              <StyledMImage src={manager.image} alt={manager.title} />
              <StyledInfosContainer>
              <StyledName>{manager.name}</StyledName>
            <StyledTitle>{manager.title}</StyledTitle>
              </StyledInfosContainer>
            </StyledMItem>
          ))
        }
      </StyledMContainer>
    </StyledOTContainer>
  );
};

export default OurTeam;
