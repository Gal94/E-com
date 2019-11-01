import styled from 'styled-components';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }
`;
export const HeaderBlock = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    
    div{
        text-transform: capitalize;
          width: 23%;
    
          &:last-child {
            width: 8%;
          }
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const WarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 22px;
    color: red;
    margin-bottom: 20px;
`;

export const StripeButton = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 20px;
`;
