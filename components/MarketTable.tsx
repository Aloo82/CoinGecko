import { DataTable } from "react-native-paper";
import { CoinSummary } from "../types";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inlineContainer: {
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "row",
    },
    logo: {
        width: 30,
        height: 30,
    },
});

const MarketDataList = ({
    coins,
    page,
    onPress,
    numberOfPages,
    onPageChange,
}: {
    coins: CoinSummary[];
    page: number;
    onPress: (id: string) => void;
    numberOfPages: number;
    onPageChange?: (page: number) => void;
}) => (
    <DataTable>
        <DataTable.Header>
            <DataTable.Title> </DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Symbol</DataTable.Title>
            <DataTable.Title>Price</DataTable.Title>
            <DataTable.Title numeric>24h High</DataTable.Title>
            <DataTable.Title numeric>24h Low</DataTable.Title>
        </DataTable.Header>

        {coins.map((coin) => (
            <DataTable.Row key={coin.symbol} onPress={() => onPress(coin.id)}>
                <DataTable.Cell>
                    <View style={styles.inlineContainer}>
                        <Image
                            source={{ uri: coin.image }}
                            style={styles.logo}
                        />
                    </View>
                </DataTable.Cell>
                <DataTable.Cell>{coin.name}</DataTable.Cell>
                <DataTable.Cell>{coin.symbol}</DataTable.Cell>
                <DataTable.Cell>{coin.current_price}</DataTable.Cell>
                <DataTable.Cell numeric>{coin.high_24h}</DataTable.Cell>
                <DataTable.Cell numeric>{coin.low_24h}</DataTable.Cell>
            </DataTable.Row>
        ))}

        {onPageChange && (
            <DataTable.Pagination
                page={page}
                numberOfPages={numberOfPages}
                onPageChange={onPageChange}
            />
        )}
    </DataTable>
);

export default MarketDataList;
