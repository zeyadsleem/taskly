import { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
];

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        placeholder="E.g. Coffee"
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem name={item.name} key={item.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingTop: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 15,
    backgroundColor: theme.colorWhite,
  },
});
