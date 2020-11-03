import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  background: #fcfdfe;
  overflow-y: scroll;
}

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`
