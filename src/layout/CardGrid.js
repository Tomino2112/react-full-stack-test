import styled from "styled-components";
import LaunchCard from "../components/lauch-card";

const CardGridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;        
    justify-content: space-between;
`;

export const CardGrid = ({ launches }) => {
    return (
        <CardGridWrapper>
            {launches.map((item, index) => (
                <LaunchCard
                    key={index.toString()}
                    image={item.links.patch.small}
                    title={item.name}
                    description={item.details}
                />
            ))}
        </CardGridWrapper>
    )
};