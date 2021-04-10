import { useLaunches } from "../hooks/useLaunches";
import Wrapper from "../layout/wrapper";
import { CardGrid } from "../layout/CardGrid";
import LaunchCard from "../components/lauch-card";

export const Launches = () => {
    const { loading, launches } = useLaunches();

    return (
        <>
            {loading && <div>loading....</div>}

            {!loading && (
            <Wrapper>
                <CardGrid data={launches} renderCard={launch => (
                    <LaunchCard
                        key={`launch-${launch.id}`}
                        image={launch.links.patch.small}
                        title={launch.name}
                        description={launch.details}
                    />
                )} />
            </Wrapper>
            )}
        </>
    );
};