import { StyleSheet, Text, View } from "react-native";
import { Address, Liked } from "../icons";

export default function Character({ name, gender, birthDate, address }) {
  return (
    <View style={styles.container}>
      <View style={styles.likeContainer}>
        <Liked />
      </View>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textDescription}>{`${gender} | ${birthDate}`}</Text>
      <View style={styles.addressContainer}>
        <View style={styles.addressIconContainer}>
          <Address />
        </View>
        <Text style={styles.textName}>{address}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    alignItems: "flex-start",
    position: "relative",
  },
  textName: {
    color: "#fff",
    fontFamily: "Urbanist-SemiBold",
    fontSize: 13,
  },
  textDescription: {
    marginTop: 8,
    color: "rgba(255, 255, 255, 0.7);",
    fontFamily: "Urbanist-Regular",
    fontSize: 13,
  },

  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    padding: 5.5,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1);",
  },
  addressIconContainer: {
    marginRight: 6.67,
  },

  likeContainer: {
    position: "absolute",
    right: 0,
    top: 0,
  },

  divider: {
    marginTop: 16,
    height: 1,
    width: "100%",
    backgroundColor: "#463B5E",
  },
});
