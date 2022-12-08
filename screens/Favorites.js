import { useState } from "react";
import { FlatList, View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { filter, includes, lowerCase } from "lodash";
import { Header, Character } from "../components";
import gStyles from "../styles";

export default function Favorites({ navigation }) {
  const [text, onChangeText] = useState("");
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <SafeAreaView style={[gStyles.container]}>
      <View style={[gStyles.content]}>
        <Header title="Favorites" navigation={navigation} />
        <Text style={styles.inputLabel}>Search a favorite</Text>
        <TextInput
          placeholderTextColor="white"
          placeholder="Search"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={[gStyles.textError]}>There are no favorites</Text>
          }
          data={filter(favorites, (favorite) => {
            let matched = false;

            const doesMatch = (value) =>
              includes(lowerCase(value), lowerCase(text));

            if (
              doesMatch(favorite.name) ||
              doesMatch(favorite.gender) ||
              doesMatch(favorite.birthDate) ||
              doesMatch(favorite.homeWorldName)
            )
              matched = true;

            return matched;
          })}
          renderItem={({ item }) => <Character {...item} />}
          keyExtractor={(item) => item.url}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: "Urbanist-SemiBold",
    fontSize: 13,
    color: "#fff",
    marginBottom: 12,
    marginTop: 35,
  },
  input: {
    fontFamily: "Urbanist-Regular",
    fontSize: 13,
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    padding: 15,
    borderRadius: 14,
    marginBottom: 22,
  },
});
