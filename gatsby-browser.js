'use strict';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { ThemeProvider } from './src/context/theme-context';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

require('lazysizes');
require('./src/assets/scss/init.scss');

// exports.onClientEntry = () => {};
