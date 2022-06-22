import { useEffect, useState } from "react";
import { CoinDetails } from "../types";

const getCoinDetails = async ({ id }: { id: string }) => {
    const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return await response.json();
};

const useCoinDetails = (id: string) => {
    const [isLoading, setLoading] = useState(true);
    const [details, setDetails] = useState<CoinDetails | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setDetails(
                await getCoinDetails({
                    id,
                })
            );
            setLoading(false);
        })();
    }, [id]);

    return { isLoading, details };
};

export default useCoinDetails;
