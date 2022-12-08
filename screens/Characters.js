import {
  Text,
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Character } from "../components";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import gStyles from "../styles";

export default function Characters({ navigation }) {
  const { data, error } = useSWR("https://swapi.dev/api/people", fetcher);

  return (
    <SafeAreaView style={[gStyles.container]}>
      <View style={[gStyles.content]}>
        <Header title="Characters" navigation={navigation} />
        {error ? <Text style={[gStyles.textError]}>Failed to load</Text> : null}
        {!data ? (
          <ActivityIndicator
            style={[gStyles.textError, styles.loadingContainer]}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.results}
            renderItem={({
              item: { name, gender, birth_year, homeworld, url },
            }) => (
              <Character
                name={name}
                gender={gender}
                birthDate={birth_year}
                homeWorldURL={homeworld}
                url={url}
              />
            )}
            keyExtractor={(item) => item.url}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    marginTop: 35,
  },
});
