import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeDisplayNameForm.styles";

export function ChangeDisplayNameForm() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellidos"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title="Cambiar nombre y apellidos"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
