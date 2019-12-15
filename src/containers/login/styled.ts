import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card } from '@material-ui/core';

export const LoginContainer = styled(Card)`
background: #4CA1AF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #C4E0E5, #4CA1AF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #C4E0E5, #4CA1AF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width: 80%;
    padding: 22px;
    ${breakpoint('desktop')`
        width: 50%;
    `}
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: red;
    background: #457fca;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #5691c8, #457fca);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #5691c8, #457fca); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 150px;
    border-radius: 100%;
    margin: 20px 0;
    background: transparent;
    font-size: 72px;
`;