import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
} from "react-native";

 const Reschedule =({navigation}) => {
  const [username, setUsername] = useState({username:"",password:""});
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (username) => {
    setUsername(username);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onSubmitFormHandler = async (event) => {
    if (!username.trim() || !password.trim()) {
      alert("Name or Email is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post("http://healthcamp.radixforce.com/api/login", {
        username,
        password,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setUsername('');
        setEmail('');
        navigation.navigate("Setting")
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}> Creating resource </Text>
          ) : (
            <Text style={styles.formHeading}>Create new user</Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#000"
            style={styles.input}
            value={username}
            editable={!isLoading}
            onChangeText={onChangeNameHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#000000"
            style={styles.input}
            value={password}
            editable={!isLoading}
            onChangeText={onChangePasswordHandler}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   
  },
  formHeading: {
    color: "#000000",
  },
  wrapper: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 350,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    color: "#000000",
    
  },
  submitButton: {
    backgroundColor: "gray",
  },
});

export default Reschedule




