import MarketTable from "../components/MarketTable";
import useCoinMarkets from "../hooks/useCoinMarkets";
import { ProgressBar } from "react-native-paper";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const MarketDataScreen = ({
    navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
    const [page, setPage] = useState(0);
    const { isLoading, coins } = useCoinMarkets({
        vs_currency: "EUR",
        order: "market_cap_desc",
        per_page: 10,
        page: page + 1,
        sparkline: "false",
    });
    return !isLoading ? (
        <MarketTable
            {...{
                coins,
                onPress: (id: string) =>
                    navigation.navigate("CoinDetails", { id }),
                page,
                numberOfPages: page + 2, // Number of pages is unknown
                onPageChange: (page) => {
                    console.log(page);
                    setPage(page);
                },
            }}
        />
    ) : (
        <ProgressBar indeterminate />
    );
};

export default MarketDataScreen;
