import { useEffect, useState } from "react";
import { CoinSummary, MarketDataApiParams } from "../types";

const getCoinList = async ({
    vs_currency,
    order,
    per_page,
    page,
    sparkline,
}: MarketDataApiParams) => {
    const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&page=${page}&sparkline=${sparkline}`
    );
    return await response.json();
};

const useCoinMarkets = ({
    vs_currency,
    order,
    per_page,
    page,
    sparkline,
}: MarketDataApiParams) => {
    const [isLoading, setLoading] = useState(true);
    const [coins, setCoins] = useState<CoinSummary[]>([]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setCoins(
                await getCoinList({
                    vs_currency,
                    order,
                    per_page,
                    page,
                    sparkline,
                })
            );
            setLoading(false);
        })();
    }, [page]);

    return { isLoading, coins };
};

export default useCoinMarkets;
