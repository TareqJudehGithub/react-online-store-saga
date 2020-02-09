import styled, {css} from "styled-components";

const Name = css`
font-size: 16px;
`;
const Price = css`

`;

export const CartItemContainer = styled.div`
width: 100%;
display: flex;
height: 80px;
margin-bottom: 15px;
`;

export const ItemDetailsContainer = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 20px;
${Name}
`;
export const NameSpan = styled.span`
font-size: 16px;
`
export const PriceSpan = styled.span`
font-size: 16px;
`