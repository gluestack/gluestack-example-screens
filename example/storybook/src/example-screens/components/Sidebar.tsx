import {
  Fab,
  FabIcon,
  HStack,
  MenuItem,
  MenuItemLabel,
  ScrollView,
  Text,
  useMediaQuery,
  MenuIcon,
  Menu,
  Pressable,
  VStack,
  Icon,
} from '@gluestack-ui/themed';
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
  const handleViewChange = (selected: any) => {
    const itemInput = {
      key: selected,
      value: selected,
    };
    onSelected(itemInput);
  };
  const [isMobileScreen] = useMediaQuery({ maxWidth: 760 });
  if (isMobileScreen) {
    return (
      <FabSidebar onViewChange={handleViewChange} sidebarData={sidebarItems} />
    );
  }
  return (
    <ScrollView w="$full" h="$full">
      <VStack w="$full" h="$full" space={isNested ? '3xl' : 'sm'} flexGrow={1}>
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
                <HStack>
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
          </>
        ) : (
          <>
            {sidebarItems.map((item: any) => (
              <VStack>
                <Text
                  color="$primary950"
                  fontSize="$lg"
                  fontWeight="$bold"
                  mx="$4"
                  fontFamily="$heading"
                >
                  {item?.heading}
                </Text>
                <VStack
                  w="$full"
                  flexGrow={1}
                  space="sm"
                  key={item?.heading}
                  mt="$2"
                >
                  {item?.subItems?.map((item: NestedSidebarItemProps) => (
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
                      <HStack alignItems="center" space="sm" ml="$1.5">
                        {item?.icon && <Icon as={item.icon} />}
                        <Text
                          color="$primary950"
                          fontSize="$md"
                          fontFamily="$body"
                        >
                          {item.value}
                        </Text>
                      </HStack>
                    </Pressable>
                  ))}
                </VStack>
              </VStack>
            ))}
          </>
        )}
      </VStack>
    </ScrollView>
  );
};

const FabSidebar = ({
  onViewChange,
  sidebarData,
}: {
  sidebarData: any;
  onViewChange: (view: SidebarItemProps) => void;
}) => {
  const [selected, setSelected] = React.useState(new Set([]));
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Menu
      placement="top left"
      selectionMode="single"
      borderWidth={1}
      selectedKeys={selected}
      closeOnSelect={true}
      isOpen={isOpen}
      onPointerLeave={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      onSelectionChange={(keys: any) => {
        setSelected(keys);
        onViewChange(keys?.currentKey);
        setIsOpen(false);
      }}
      trigger={({ ...triggerProps }) => {
        return (
          <Fab
            size="md"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            renderInPortal={true}
            position="fixed"
            zIndex={999}
            {...triggerProps}
          >
            <FabIcon as={MenuIcon} />
          </Fab>
        );
      }}
    >
      {sidebarData.map((item: SidebarItemProps) => (
        <MenuItem key={item.key} textValue={item.value}>
          <MenuItemLabel size="sm" ml="$2">
            {item.value}
          </MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};
export default Sidebar;
