import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

export default function Home() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        }}
        style={styles.logo}
      />

      <Text style={styles.tagline}>
        Connect with friends and the world around you.
      </Text>

      <TextInput
        style={[styles.input, { width: screenWidth * 0.8 }]}
        placeholder="Email or Phone Number"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={[styles.input, { width: screenWidth * 0.8 }]}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.loginButton, { width: screenWidth * 0.8 }]}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Forgot Password?</Text>
      <Text style={styles.link}>Sign Up for Facebook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  loginButton: {
    height: 50,
    backgroundColor: "#1877f2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#1877f2",
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
