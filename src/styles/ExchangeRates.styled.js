import styled from "styled-components";

export const TableContainer = styled.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 16px;
    padding: 6px 6px 6px 16px;
    font-size: 14px;
    height: 60vh;
    overflow: auto;
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
    &:hover {
        background: whitesmoke;
        cursor: pointer;
    }
    &:active {
        background: #F0F0F0;
        cursor: pointer;
    }
`
export const TableHead = styled.thead`
`
export const TableBody = styled.tbody`
    position: relative;
`
export const TableHeader = styled.th`
    padding: 4px;
`
export const TableDatum = styled.td`
    padding: 4px;
    width: 100px;
`