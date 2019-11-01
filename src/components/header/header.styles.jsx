import styled, { css } from "styled-components";
import {Link} from "react-router-dom";


export const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 25px;
    height: 70px;
    width: 100%;
`;
//pass the component you want to wrap for custom components
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const Options = styled.div`
    width: 50%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;
/*If different elements share the same css,
wrap the css code in 'css' and then assign it to the various components*/
export const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;