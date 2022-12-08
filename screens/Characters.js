import { StyleSheet, Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Character } from "../components";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function Characters() {
  const { data, error } = useSWR("https://swapi.dev/api/people", fetcher);

  if (error) return <Text style={styles.textError}>Failed to load</Text>;
  if (!data) return <Text style={styles.textError}>Loading...</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header title="Characters" />
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17141F",
    padding: 17,
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 550,
    flex: 1,
  },
  textError: {
    color: "rgba(255, 255, 255, 0.7);",
    fontFamily: "Urbanist-Regular",
    fontSize: 13,
  },
});
