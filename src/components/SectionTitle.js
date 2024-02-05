import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: ${(props) => (props.outline ? 'left' : 'center')};
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }

  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;
export default function SectionTitle({
  subheading = 'This subhead',
  heading = 'this is head',
  outline = false,
}) {
  return (
    <SectionTitleStyle outline={outline}>
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
