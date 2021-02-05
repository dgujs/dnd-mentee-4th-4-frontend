/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import ColorContext from '../../../context/ColorContext';

import { Logo, HeaderTools } from '../../../constants/headerItem';

const HeaderWrapper = styled.div(tw`block fixed w-full z-50`);

const HeaderContainer = styled.div(
  tw`flex items-center pt-40 text-white md:(justify-between) justify-end`,
  css`
    background-color: #303030;
    height: 50px;
    @media (min-width: 768px) {
      padding: 0 12.5%;
    }
    @media (max-width: 767px) {
      padding: 0 5%;
    }
  `,
);

const ImageContainer = styled.img(tw`items-center clickable w-5 h-5`);
const LogoContainer = styled.img(
  tw`items-center clickable w-8 h-8 md:(relative left-auto) absolute left-2/4 transform -translate-x-2/4`,
);

const ToolImageContainer = styled(ImageContainer)(tw`md:(px-5) px-3 z-10`);
const ToolBar = styled.div(tw`flex items-center justify-end`);

const SearchBoxContainer = styled.div(
  tw`md:(flex justify-end w-48 h-7 mx-5 clickable border-solid border-2 rounded-2xl pt-0) pt-1 items-center`,
  css`
    border-color: #646464;
  `,
);

const Header = () => {
  const { theme, setTheme } = useContext(ColorContext);

  const temp = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer src={Logo} />
        <ToolBar>
          {Object.entries(HeaderTools).map(([key, value]) => {
            if (key === 'Search')
              return (
                <SearchBoxContainer key={key}>
                  <ToolImageContainer src={value} />
                </SearchBoxContainer>
              );
            return <ToolImageContainer key={key} src={value} />;
          })}
          <button type="button" onClick={temp}>
            Click
          </button>
        </ToolBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
