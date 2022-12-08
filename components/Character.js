import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { capitalize } from "lodash";
import { Address, Liked } from "../icons";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function Character({ name, gender, birthDate, homeWorldURL }) {
  const { data, error } = useSWR(homeWorldURL, fetcher);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeContainer}>
        <Liked />
      </TouchableOpacity>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textDescription}>{`${capitalize(
        gender
      )} | ${birthDate}`}</Text>
      <View style={styles.addressContainer}>
        <View style={styles.addressIconContainer}>
          <Address />
        </View>
        {error ? (
          <Text style={styles.textName}>Failed to load</Text>
        ) : (
          <Text style={styles.textName}>{data ? data.name : "Loading..."}</Text>
        )}
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    alignItems: "flex-start",
    position: "relative",
  },
  textError: {
    color: "rgba(255, 255, 255, 0.7);",
    fontFamily: "Urbanist-Regular",
    fontSize: 13,
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
