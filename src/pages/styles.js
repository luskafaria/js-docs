import styled from "styled-components"

export const Content = styled.div`
  width: 93%;
  float: right;
  height: 100vh;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #282c35;
  overflow-y: scroll;

  @media (max-width: 768px) {
    width: 100%;
  }

  ::-webkit-scrollbar {
    padding: 10px 0;
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(40, 44, 53);
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(255, 153, 0);
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    ::-webkit-scrollbar {
      padding: 10px 0;
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 20px;
    }
  }
`

export const Title = styled.h1`
  text-decoration: underline;
  text-decoration-color: #ff9900;
  font-weight: bold;
  margin-bottom: 0;

  @media (max-width: 768px) {
    padding-top: 75px;
  }
`

export const Subtitle = styled.h2`
  padding-top: 26px;
  margin: 0;
`;

export const Paragraph = styled.p`
  padding: 26px 13px 18px 13px;
  max-width: 70%;
  margin: 0 auto;
  font-weight: 300;

  & a {
    text-decoration: none;
    color: rgb(255, 153, 0);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 26px 13px 18px 13px;
    padding: 0;
  }
`

export const Links = styled.div`
  padding: 10px 0 10px 0;

  & a {
    color: #fff;
    text-decoration: none;
    font-style: italic;
  }
`

export const ContentInfos = styled.div`
    padding: 25px 0 25px 0;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`
