import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangePasswordForm.styles";

export function ChangePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <View style={styles.content}>
      <Input
        placeholder="Contraseña actual"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
      />
      <Input
        placeholder="Nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
      />
      <Input
        placeholder="Repite nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}