/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { InputGroup, Input } from 'reactstrap';

import tw from 'twin.macro';
import { iconSearch, iconX } from '../../constants/headerItem';

const INPUT_PLACEHOLDER = '| 검색';
const SearchContainer = styled.div(
  tw`fixed w-full z-100 flex justify-center items-center`,
  css`
    background-color: #303030;
    height: 80px;
  `,
);

const SearchBar = styled(InputGroup)(
  tw`rounded-3xl flex flex-row items-center`,
  css`
    background-color: #747474;
    height: 35px;
  `,
);

const StyledInput = styled(Input)(
  tw`border-none outline-none`,
  css`
    background-color: transparent;
    color: #464646;
    font-size: 18px;
    &::placeholder {
      color: #464646;
    }
  `,
);

const SearchCloseButton = styled.div(
  tw`fixed z-100 left-2/4 transform -translate-x-2/4`,
  css`
    margin-top: 85px;
    background-color: #747474;
    border-radius: 50%;
    line-height: 6px;
  `,
);

const SearchCloseImage = styled.img(tw`p-1.5 clickable w-6 h-6`);
const ImageContainer = styled.img(tw`mx-4 clickable w-5 h-5`);

const Search = (props) => {
  const { handleSearch } = props;
  return (
    <>
      <SearchContainer>
        <SearchBar>
          <ImageContainer src={iconSearch} />
          <StyledInput placeholder={INPUT_PLACEHOLDER} />
          <ImageContainer src={iconX} />
        </SearchBar>
      </SearchContainer>
      <SearchCloseButton onClick={handleSearch}>
        <SearchCloseImage src={iconX} />
      </SearchCloseButton>
    </>
  );
};

export default Search;
