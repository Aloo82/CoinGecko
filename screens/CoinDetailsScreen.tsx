import { ProgressBar } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import useCoinDetails from "../hooks/useCoinDetails";
import { DataTable, Card } from "react-native-paper";
import RenderHtml from "react-native-render-html";
import { ScrollView, useWindowDimensions } from "react-native";

const CoinDetailsScreen = ({
    route,
}: NativeStackScreenProps<RootStackParamList, "CoinDetails">) => {
    const { width } = useWindowDimensions();
    const { id } = route.params;
    const { isLoading, details } = useCoinDetails(id);
    return !isLoading && details ? (
        <ScrollView>
            <Card>
                <Card.Title title={details.name} subtitle={details.symbol} />
                <Card.Content>
                    <RenderHtml
                        contentWidth={width}
                        source={{ html: details.description.en }}
                    />
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Hashing Algorithm</DataTable.Title>
                            <DataTable.Title>Market Cap (EUR)</DataTable.Title>
                            <DataTable.Title>Genesis Date</DataTable.Title>
                            <DataTable.Title>Homepage</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>
                                {details.hashing_algorithm}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                {details.market_data.market_cap.eur}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                {details.genesis_date}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                {details.links.homepage}
                            </DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </Card.Content>
            </Card>
        </ScrollView>
    ) : (
        <ProgressBar indeterminate />
    );
};

export default CoinDetailsScreen;
