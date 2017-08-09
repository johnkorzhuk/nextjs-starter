// @flow

import React from 'react';
import withRedux from 'next-redux-wrapper';
import styled from 'styled-components';

import initStore from '../store/store';

const H1 = styled.h1`color: red;`;

const Index = () =>
  <div>
    <H1>Nextjs sdsds</H1>
  </div>;

export default withRedux(initStore)(Index);
