import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card } from '@material-ui/core';

export const LoginContainer = styled(Card)`
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
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin: 20px 0;
    background: red;
    font-size: 72px;
`;