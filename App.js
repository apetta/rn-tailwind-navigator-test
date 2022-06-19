import { TailwindProvider } from "tailwindcss-react-native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <TailwindProvider>
      <StackNavigator />
    </TailwindProvider>
  );
}
