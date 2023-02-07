import styled from "styled-components";
import CurrencyInput from "react-currency-input-field";

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 16px;
    width: 100%;
    @media (max-width: 480px) {
        grid-template-columns: unset;
        grid-template-rows: repeat(4, auto);
    }
    
`
export const Card = styled.div`
    border: 1px solid lightgrey;
    border-radius: 16px;
    padding: 40px 32px;
    width: 100%;
    max-width: 600px;
    margin: 20px 8px 40px;
    background: white;
`
export const CurrencyCalculatorInput = styled(CurrencyInput)`
    border: 1px solid lightgray;
    border-radius: 16px;
    padding: 12px;
`

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    @media (max-width: 480px) {
        &:nth-child(1) {
            grid-row: 1;
        }
        &:nth-child(2) {
            padding-top: 12px;
            grid-row: 3;
        }
    }
`
export const Select = styled.select`
    appearance: none;
    border: 1px solid lightgray;
    border-radius: 16px;
    padding: 12px;
`

export const ConversionInfo = styled.div`
    /* width: 100%; */
`

export const KorunyText = styled.p`
    margin-top: 32px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
`

export const ConvertedText = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-block-end: 0;
`