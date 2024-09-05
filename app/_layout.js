import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Logo } from "../components/Logo";
import { InfoCircleIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1 bg-black ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <InfoCircleIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
