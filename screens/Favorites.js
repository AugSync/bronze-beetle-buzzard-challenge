import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import gStyles from "../styles";
import { Header, Character } from "../components";

export default function Favorites({ navigation }) {
  return (
    <SafeAreaView style={[gStyles.container]}>
      <View style={[gStyles.content]}>
        <Header title="Favorites" navigation={navigation} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[]}
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
