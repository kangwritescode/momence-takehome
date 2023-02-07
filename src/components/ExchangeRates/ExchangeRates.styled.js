import styled from "styled-components";

export const TableContainer = styled.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 16px;
    padding: 6px 6px 6px 16px;
    font-size: 14px;
    max-height: 400px;
    overflow: auto;

    -webkit-box-shadow: 6px -4px 25px 0px rgba(235,235,235,1);
    -moz-box-shadow: 6px -4px 25px 0px rgba(235,235,235,1);
    box-shadow: 6px -4px 25px 0px rgba(235,235,235,1);

    @media (max-width: 480px) {
        max-height: 320px;
    }
`

export const Table = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    text-align: left;
`

export const TableRow = styled.tr`
    &:not(:last-child) {
        border-top: 1px solid gainsboro;
    }
`
export const TableHeader = styled.th`
    padding: 4px;
`
export const TableDatum = styled.td`
    padding: 6px 4px;
    width: 106px;
`