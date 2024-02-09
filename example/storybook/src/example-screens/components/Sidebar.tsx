import { Text } from '@gluestack-ui/themed';
import { Pressable, VStack } from '@gluestack-ui/themed';
import React from 'react';

interface SidebarItemProps {
  key: string;
  value: string;
}
interface SidebarProps {
  sidebarItems: Array<SidebarItemProps>;
  itemProps?: any;
  onSelected: (item: SidebarItemProps) => void;
}
const Sidebar = ({ sidebarItems, itemProps, onSelected }: SidebarProps) => {
  const [selected, setSelected] = React.useState<SidebarItemProps>(
    sidebarItems[0]
  );
  const handlePress = (itemInput: SidebarItemProps) => {
    setSelected(itemInput);
    onSelected(itemInput);
  };
  return (
    <VStack w="$full" flexGrow={1} space="sm">
      {sidebarItems.map((item) => (
        <Pressable
          w="$full"
          p="$2"
          $active-bg="$background100"
          key={item.key}
          onPress={() => handlePress(item)}
          bg={item.key === selected.key ? '$background100' : ''}
          borderRadius="$md"
        >
          <Text
            color="$primary950"
            fontSize="$md"
            px="$4"
            fontFamily="$body"
            {...itemProps}
          >
            {item.value}
          </Text>
        </Pressable>
      ))}
    </VStack>
  );
};

export default Sidebar;
