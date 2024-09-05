import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import Screen from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-bold text-white mb-4 text-2xl">About Page</Text>

        <Text className="font-semibold text-xl text-white mb-8">
          Created by: John Doe
        </Text>

        <Text className="text-white text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
          velit ut nibh malesuada, sed vestibulum odio rutrum. Nunc at dapibus
          massa, vitae venenatis enim. Proin vel felis egestas enim pellentesque
          imperdiet. Vestibulum vel mauris ut ligula accumsan ullamcorper.
          Integer nec enim et diam rutrum maximus sed nec ligula. Pellentesque
          bibendum non urna in eleifend. Aliquam sollicitudin mauris eu sagittis
          mollis. Nunc id tempus orci. Maecenas velit mi, placerat et vulputate
          nec, facilisis in dui.{" "}
        </Text>

        <Text className="text-white text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
          velit ut nibh malesuada, sed vestibulum odio rutrum. Nunc at dapibus
          massa, vitae venenatis enim. Proin vel felis egestas enim pellentesque
          imperdiet. Vestibulum vel mauris ut ligula accumsan ullamcorper.
          Integer nec enim et diam rutrum maximus sed nec ligula. Pellentesque
          bibendum non urna in eleifend. Aliquam sollicitudin mauris eu sagittis
          mollis. Nunc id tempus orci. Maecenas velit mi, placerat et vulputate
          nec, facilisis in dui.{" "}
        </Text>

        <Text className="text-white text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
          velit ut nibh malesuada, sed vestibulum odio rutrum. Nunc at dapibus
          massa, vitae venenatis enim. Proin vel felis egestas enim pellentesque
          imperdiet. Vestibulum vel mauris ut ligula accumsan ullamcorper.
          Integer nec enim et diam rutrum maximus sed nec ligula. Pellentesque
          bibendum non urna in eleifend. Aliquam sollicitudin mauris eu sagittis
          mollis. Nunc id tempus orci. Maecenas velit mi, placerat et vulputate
          nec, facilisis in dui.{" "}
        </Text>
      </ScrollView>
    </Screen>
  );
}
