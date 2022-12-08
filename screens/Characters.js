import { Text, FlatList, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import gStyles from "../styles";
import { Header, Character } from "../components";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function Characters({ navigation }) {
  const { data, error } = useSWR("https://swapi.dev/api/people", fetcher);

  return (
    <SafeAreaView style={[gStyles.container]}>
      <View style={[gStyles.content]}>
        <Header title="Characters" navigation={navigation} />
        {error ? <Text style={[gStyles.textError]}>Failed to load</Text> : null}
        {!data ? (
          <ActivityIndicator style={[gStyles.textError]} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.results}
            renderItem={({ item: { name, gender, birth_year, homeworld } }) => (
              <Character
                name={name}
                gender={gender}
                birthDate={birth_year}
                homeWorldURL={homeworld}
              />
            )}
            keyExtractor={(item) => item.url}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
