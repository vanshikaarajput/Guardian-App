import { Button, View } from "react-native";
import { startTracking, toggleSOS } from "../locationTracker";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Button title="Start Tracking 📍" onPress={startTracking} />

      <View style={{ height: 20 }} />

      <Button title="Toggle SOS 🚨" onPress={toggleSOS} />

    </View>
  );
}``