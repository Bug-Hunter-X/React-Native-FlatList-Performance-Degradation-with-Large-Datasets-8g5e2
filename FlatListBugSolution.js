// Correct implementation using keyExtractor
<FlatList
  data={data}
  keyExtractor={(item, index) => item.id.toString()}
  renderItem={({ item }) => (
    <ListItem item={item} />
  )}
/>

// Optimization of list item component
const ListItem = ({item}) => {
  return(
    <View>
      <Text>{item.name}</Text> // Optimized rendering
    </View>
  );
};

// Consider using optimized components like SectionList or VirtualizedList for extremely large datasets.