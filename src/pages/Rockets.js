import { useRockets } from "../hooks/useRockets";
import Wrapper from "../layout/wrapper";
import { CardGrid } from "../layout/CardGrid";
import RocketCard from "../components/rocket-card";

export const Rockets = () => {
    const { loading, rockets } = useRockets();

    return (
        <>
            {loading && <div>loading....</div>}

            {!loading && (
            <Wrapper>
                <CardGrid data={rockets} renderCard={rocket => (
                    <RocketCard
                        key={`rocket-${rocket.id}`}
                        image={rocket.image}
                        title={rocket.name}
                        description={rocket.description}
                        cost={rocket.cost_per_launch}
                    />
                )} />
            </Wrapper>
            )}
        </>
    );
};