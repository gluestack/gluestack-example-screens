import { HStack, Text } from '@gluestack-ui/themed';
import { Pressable, VStack } from '@gluestack-ui/themed';
import React from 'react';

interface SidebarItemProps {
  key: string;
  value: string;
}
interface NestedSidebarItemProps extends SidebarItemProps {
  key: string;
  value: string;
  icon: any;
}
interface SidebarProps {
  sidebarItems: Array<SidebarItemProps>;
  itemProps?: any;
  onSelected: (item: SidebarItemProps) => void;
  isNested?: boolean;
}
const Sidebar = ({
  sidebarItems,
  itemProps,
  onSelected,
  isNested = false,
}: SidebarProps) => {
  const [selected, setSelected] = React.useState<SidebarItemProps>(
    sidebarItems[0]
  );
  const handlePress = (itemInput: SidebarItemProps) => {
    setSelected(itemInput);
    onSelected(itemInput);
  };
  return (
    <VStack w="$full" flexGrow={1} space="sm">
      {!isNested ? (
        <>
          {sidebarItems.map((item) => (
            <Pressable
              w="$full"
              p="$2"
              $active-bg="$background100"
              $hover-bg="$background100"
              key={item.key}
              onPress={() => handlePress(item)}
              bg={item.key === selected.key ? '$background100' : ''}
              borderRadius="$md"
              {...itemProps}
            >
              <Text
                color="$primary950"
                fontSize="$md"
                px="$4"
                fontFamily="$body"
              >
                {item.value}
              </Text>
            </Pressable>
          ))}
        </>
      ) : (
        <>
          {sidebarItems.map((item: any) => (
            <VStack
              w="$full"
              flexGrow={1}
              space="sm"
              maxHeight="$56"
              overflow="scroll"
              key={item?.heading}
            >
              <Text
                color="$primary950"
                fontSize="$lg"
                px="$4"
                fontFamily="$heading"
              >
                {item?.heading}
              </Text>
              {item?.heading?.subItems?.map((item: NestedSidebarItemProps) => (
                <Pressable
                  w="$full"
                  p="$2"
                  $active-bg="$background100"
                  $hover-bg="$background100"
                  key={item.key}
                  onPress={() => handlePress(item)}
                  bg={item.key === selected.key ? '$background100' : ''}
                  borderRadius="$md"
                  {...itemProps}
                >
                  <HStack alignItems="center" space="sm">
                    {item.icon}
                    <Text
                      color="$primary950"
                      fontSize="$md"
                      px="$4"
                      fontFamily="$body"
                    >
                      {item.value}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          ))}
        </>
      )}
    </VStack>
  );
};

export default Sidebar;
