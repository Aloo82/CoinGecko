export type CoinSummary = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: string;
    high_24h: number;
    low_24h: number;
};

export type CoinDetails = {
    id: string;
    symbol: string;
    name: string;
    hashing_algorithm: string;
    description: {
        en: string;
    };
    market_data: {
        market_cap: {
            eur: number;
        };
    };
    links: {
        homepage: string[];
    };
    genesis_date: string;
};

export type RootStackParamList = {
    Home: undefined;
    CoinDetails: { id: string };
};

export type MarketDataApiParams = {
    vs_currency: string;
    order: string;
    per_page: number;
    page: number;
    sparkline: string;
};
