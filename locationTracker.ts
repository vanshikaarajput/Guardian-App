import * as Location from "expo-location";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const USER_ID = "user1";
let isSOS = false;

export const toggleSOS = () => {
  isSOS = !isSOS;
  console.log("🚨 SOS Mode:", isSOS);
};

export const startTracking = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    alert("Permission denied");
    return;
  }

  console.log("📍 Tracking started...");

  setInterval(async () => {
    try {
      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const data = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        timestamp: Date.now(),
      };

      console.log("📍 Location:", data);

      // ✅ overwrite (no clutter)
      await setDoc(doc(db, "liveLocation", USER_ID), data);

      // 🚨 save history only in SOS
      if (isSOS) {
        await addDoc(collection(db, "sos_history"), {
          userId: USER_ID,
          ...data,
        });
      }

    } catch (error) {
      console.log("🔥 Error:", error);
    }

  }, 10000); // ⏱ 10 sec
};