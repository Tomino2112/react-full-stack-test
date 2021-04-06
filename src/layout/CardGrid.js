import styled from "styled-components";

const CardGridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;        
    justify-content: space-between;
`;

export const CardGrid = ({ data, renderCard }) => {
    return (
        <CardGridWrapper>
            {data.map(renderCard)}
        </CardGridWrapper>
    )
};