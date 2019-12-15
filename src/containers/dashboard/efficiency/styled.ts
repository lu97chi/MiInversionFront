import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const EfficiencyContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;


export const CustomPaper = styled(Paper)`
    width: 70%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;