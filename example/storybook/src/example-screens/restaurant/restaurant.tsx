import React from 'react';
import {
  AlertCircleIcon,
  Button,
  ButtonIcon,
  ButtonText,
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Pressable,
  ScrollView,
  SearchIcon,
  StarIcon,
  Text,
  VStack,
} from '@gluestack-ui-new/themed';
import {
  Bookmark,
  History,
  X,
  Dot,
  ChefHat,
  Clock4,
  Clock5,
  SlidersHorizontal,
  Grip,
  User,
  Star,
  CornerUpRight,
  MapPin,
  Smartphone,
  Share2,
  Save,
  Check,
  Car,
  UtensilsCrossed,
  Globe2,
  Phone,
  Heart,
  HeartHandshake,
  Tag,
  LocateFixed,
  Pen,
} from 'lucide-react-native';

const restaurantList = [
  {
    restaurantName:
      'VYANA - World Cuisine | Mocktails | Al Fresco Rooftop Dining',
    rating: 4.3,
    numberOfPeople: '(7290)',
    restaurantType: 'Restaurant',
    address: 'No.121/17-2/1, Sai Bhavana, 4th Floor, 9th Cross Rd',
    restaurantOpen: true,
    restaurantTiming: '11:30 pm',
    delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
    deliveryContact: 'No-contact delivery' || 'delivery',
    restaurantImage: require('../assets/restaurant1.jpg'),
  },
  {
    restaurantName: 'Swad Royal Family Restaurant',
    rating: 3.9,
    numberOfPeople: '(1235)',
    restaurantType: 'North Indian',
    address: '1st floor, opposite Mantri Apartment',
    restaurantOpen: false,
    restaurantTiming: '11 pm',
    delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
    deliveryContact: 'No-contact delivery' || 'delivery',
    restaurantImage: require('../assets/restaurant2.jpg'),
  },
  {
    restaurantName:
      'VYANA - World Cuisine | Mocktails | Al Fresco Rooftop Dining',
    rating: 4.3,
    numberOfPeople: '(7290)',
    restaurantType: 'Restaurant',
    address: 'No.121/17-2/1, Sai Bhavana, 4th Floor, 9th Cross Rd',
    restaurantOpen: true,
    restaurantTiming: '11:30 pm',
    delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
    deliveryContact: 'No-contact delivery' || 'delivery',
    restaurantImage: require('../assets/restaurant1.jpg'),
  },
  {
    restaurantName: 'Swad Royal Family Restaurant',
    rating: 3.9,
    numberOfPeople: '(1235)',
    restaurantType: 'North Indian',
    address: '1st floor, opposite Mantri Apartment',
    restaurantOpen: false,
    restaurantTiming: '11 pm',
    delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
    deliveryContact: 'No-contact delivery' || 'delivery',
    restaurantImage: require('../assets/restaurant2.jpg'),
  },
  {
    restaurantName:
      'VYANA - World Cuisine | Mocktails | Al Fresco Rooftop Dining',
    rating: 4.3,
    numberOfPeople: '(7290)',
    restaurantType: 'Restaurant',
    address: 'No.121/17-2/1, Sai Bhavana, 4th Floor, 9th Cross Rd',
    restaurantOpen: true,
    restaurantTiming: '11:30 pm',
    delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
    deliveryContact: 'No-contact delivery' || 'delivery',
    restaurantImage: require('../assets/restaurant1.jpg'),
  },
  {
    restaurantName: 'Swad Royal Family Restaurant',
    rating: 3.9,
    numberOfPeople: '(1235)',
    restaurantType: 'North Indian',
    address: '1st floor, opposite Mantri Apartment',
    restaurantOpen: false,
    restaurantTiming: '11 pm',
    delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
    deliveryContact: 'No-contact delivery' || 'delivery',
    restaurantImage: require('../assets/restaurant2.jpg'),
  },
];

const RestaurantList = ({ restaurants }) => {
  return (
    <VStack m="$4">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </VStack>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderRatingStars = () => {
    const filledStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - filledStars);
    const emptyStars = 5 - filledStars - halfStars;

    const stars = [];

    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Icon color="$amber500" sx={{ fill: '$amber500' }} as={Star} />
      );
    }

    // Half stars
    for (let i = 0; i < halfStars; i++) {
      stars.push(<Icon color="$amber500" as={Star} />);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon color="$amber500" as={Star} />);
    }

    return stars;
  };

  const {
    restaurantName,
    rating,
    numberOfPeople,
    restaurantType,
    address,
    restaurantOpen,
    restaurantTiming,
    delivery,
    deliveryContact,
    restaurantImage,
  } = restaurant;

  return (
    <Pressable onPress={handleOpen}>
      <VStack
        mb="$5"
        pb="$5"
        borderBottomWidth={1}
        borderColor="$border200"
        bg="$background0"
        sx={{ ':hover': { bg: '$red600' } }}
      >
        <HStack justifyContent="space-between">
          <VStack mb="$1" flex={1} mr="$3">
            <Text fontSize="$lg" fontWeight="$bold">
              {restaurantName}
            </Text>
            <HStack space="xs">
              <Text fontSize="$md" fontWeight="$medium">
                {rating}
              </Text>
              <Text>{renderRatingStars()}</Text>
              <Text fontSize="$md" color="$text500">
                {numberOfPeople}
              </Text>
            </HStack>
            <Text fontSize="$md">
              {restaurantType} <Icon as={Dot} /> {address}
            </Text>
            <HStack>
              <Text
                fontSize="$md"
                color={restaurantOpen ? '$green500' : '$red500'}
              >
                {restaurantOpen ? 'Open' : 'Closed'}
              </Text>
              <Icon as={Dot} />
              <Text fontSize="$md" color="$text500">
                {restaurantOpen ? 'Closes' : 'Opens'} {restaurantTiming}
              </Text>
            </HStack>
          </VStack>
          <Image w="$20" h="$20" borderRadius="$md" source={restaurantImage} />
        </HStack>
        <VStack mt="$3">
          <HStack>
            <Text fontSize="$md">Dine in</Text>
            <Icon as={Dot} />
            <Text fontSize="$md">{delivery}</Text>
            <Icon as={Dot} />
            <Text fontSize="$md">{deliveryContact}</Text>
          </HStack>
          <Button borderRadius="$full" bg="$primary500" mt="$2">
            <ButtonText color="$white">RESERVE A TABLE</ButtonText>
          </Button>
        </VStack>
      </VStack>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        // placement="right"
        trigger={(triggerProps) => {
          return <Pressable {...triggerProps} />;
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <HStack w="$full" position="relative">
              <ModalCloseButton
                bg="$background0"
                borderRadius="$full"
                position="absolute"
                top={0}
                right={0}
                mt="$2"
                mr="$2"
                onPress={handleClose}
                zIndex={999}
              >
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </HStack>
          </ModalHeader>

          <ScrollView>
            <ModalBody h="100vh">
              <Image
                w="$full"
                h="$64"
                borderRadius="$md"
                source={restaurantImage}
                resizeMode="cover"
              />
              <Heading fontWeight="$normal" fontSize="$2xl" mt="$2" mb="$3">
                {restaurantName}
              </Heading>
              <HStack space="xs">
                <Text fontSize="$md" fontWeight="$medium">
                  {rating}
                </Text>
                <Text>{renderRatingStars()}</Text>
                <Text fontSize="$md" color="$text500">
                  {numberOfPeople}
                </Text>
              </HStack>
              <Text fontSize="$md" color="$text500">
                {restaurantType}
              </Text>
              <HStack
                paddingVertical="$3"
                justifyContent="space-between"
                alignItems="center"
              >
                <VStack alignItems="center">
                  <Icon as={CornerUpRight} />
                  <Text>Directions</Text>
                </VStack>
                <VStack alignItems="center">
                  <Icon as={Save} />
                  <Text>Save</Text>
                </VStack>
                <VStack alignItems="center">
                  <Icon as={MapPin} />
                  <Text>Nearby</Text>
                </VStack>
                <VStack alignItems="center">
                  <Icon as={Smartphone} />
                  <Text>Send to phone</Text>
                </VStack>
                <VStack alignItems="center">
                  <Icon as={Share2} />
                  <Text>Share</Text>
                </VStack>
              </HStack>
              <Button borderRadius="$full" bg="$primary500" mt="$2">
                <ButtonText color="$white">RESERVE A TABLE</ButtonText>
              </Button>
              <HStack
                paddingVertical="$3"
                justifyContent="space-between"
                alignItems="center"
              >
                <VStack>
                  <HStack>
                    <Icon as={Check} />
                    <Text>Dine-in</Text>
                    <Icon as={Dot} />
                    <Icon as={Check} />
                    <Text>Kerbside pickup</Text>
                  </HStack>
                  <HStack>
                    <Icon as={Check} />
                    <Text>{deliveryContact}</Text>
                  </HStack>
                </VStack>
                <Icon as={ChevronRightIcon} />
              </HStack>
              <VStack paddingVertical="$3" gap="$3">
                <HStack gap="$3">
                  <Icon as={MapPin} />
                  <Text>{address}</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Clock5} />
                  <VStack>
                    <HStack>
                      <Text
                        fontSize="$md"
                        color={restaurantOpen ? '$green500' : '$red500'}
                      >
                        {restaurantOpen ? 'Open' : 'Closed'}
                      </Text>
                      <Icon as={Dot} />
                      <Text fontSize="$md">
                        {restaurantOpen ? 'Closes' : 'Opens'} {restaurantTiming}
                      </Text>
                      <Icon as={ChevronDownIcon} />
                    </HStack>
                    <Text>Updated by this business 6 weeks ago</Text>
                  </VStack>
                </HStack>
                <HStack gap="$3">
                  <Icon as={CalendarDaysIcon} />
                  <Text>Find a table</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Car} />
                  <VStack>
                    <Text>Place an order</Text>
                    <Text>swiggy.com</Text>
                  </VStack>
                </HStack>
                <HStack gap="$3">
                  <Icon as={UtensilsCrossed} />
                  <VStack>
                    <Text>Menu</Text>
                    <Text>linktr.ee</Text>
                  </VStack>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Globe2} />
                  <Text>thevyana.com</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Phone} />
                  <Text>099164 66266</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={LocateFixed} />
                  <Text>WH6W+35 Bengaluru, Karnataka</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Smartphone} />
                  <Text>Send to your phone</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={HeartHandshake} />
                  <Text>LGBTQ+ friendly</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Heart} />
                  <Text>Identifies as women-owned</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={History} />
                  <Text>Your Maps activity</Text>
                </HStack>
                <HStack gap="$3">
                  <Icon as={Tag} />
                  <Text>Add a label</Text>
                </HStack>
              </VStack>

              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                gap="$1.5"
              >
                <ButtonIcon as={Pen} />
                <ButtonText>Suggest an edit</ButtonText>
              </Button>
            </ModalBody>
          </ScrollView>
        </ModalContent>
      </Modal>
    </Pressable>
  );
};

const RestaurantView = () => {
  return (
    <HStack
      h="100vh"
      w="$full"
      borderWidth={1}
      borderColor="$border200"
      borderRadius="$lg"
      bg="$background0"
      justifyContent="space-between"
      position="relative" // Set position relative for z-index to work
    >
      {/* Background Image */}
      <Image
        w="$full"
        flex={1}
        h="100%"
        resizeMode="cover"
        source={require('../assets/GoogleMap.png')}
        style={{ position: 'absolute', zIndex: -1 }} // Make the background image stay behind other content
        sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}
      />

      <HStack>
        {/* sidebar */}
        <VStack
          sx={{ '@base': { display: 'none' }, '@lg': { display: 'flex' } }}
          p="$4"
          borderRightWidth={1}
          borderColor="$border200"
          gap="$6"
          alignItems="center"
          shadowColor="$trueGray800"
          style={{
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            zIndex: 2,
          }}
          bg="$background0"
        >
          <Image w="$6" h="$6" source={require('../assets/google_maps.png')} />
          <VStack gap="$2" alignItems="center">
            <Icon w="$4" h="$4" color="$background500" as={Bookmark} />
            <Text fontSize="$2xs" color="$text500">
              Saved
            </Text>
          </VStack>
          <VStack gap="$2" alignItems="center">
            <Icon w="$4" h="$4" color="$background400" as={History} />
            <Text fontSize="$2xs" color="$text500">
              Recents
            </Text>
          </VStack>
        </VStack>
        {/* restaurant list */}
        <VStack
          shadowColor="$trueGray800"
          style={{
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            zIndex: 1,
          }}
          borderRightWidth={1}
          borderColor="$border200"
          sx={{ '@md': { w: '$102' }, '@base': { w: '$96' } }}
          bg="$background0"
        >
          <Input
            m="$4"
            h="$12"
            sx={{ '@md': { w: '$96' } }}
            borderRadius="$full"
          >
            <InputField fontSize="$sm" placeholder="Search Google Maps" />
            <InputSlot pr="$3">
              <InputIcon w="$4" h="$4" as={SearchIcon} />
            </InputSlot>
            <InputSlot pr="$3">
              <InputIcon w="$4" h="$4" as={X} />
            </InputSlot>
          </Input>

          <ScrollView>
            <HStack m="$4" alignItems="center" gap="$0.5">
              <Text fontSize="$lg" fontWeight="$normal">
                Results
              </Text>
              <Icon as={AlertCircleIcon} />
            </HStack>

            <RestaurantList restaurants={restaurantList} />
          </ScrollView>
        </VStack>
      </HStack>
      {/* buttons */}
      <HStack
        sx={{ '@lg': { display: 'flex' }, '@base': { display: 'none' } }}
        p="$4"
        space="sm"
      >
        <Button>
          <ButtonIcon as={StarIcon} />
          <ButtonText>Rating</ButtonText>
        </Button>
        <Button>
          <ButtonIcon as={ChefHat} />
          <ButtonText>Cuisine</ButtonText>
        </Button>
        <Button>
          <ButtonIcon as={Clock4} />
          <ButtonText>Hours</ButtonText>
        </Button>
        <Button>
          <ButtonIcon as={SlidersHorizontal} />
          <ButtonText>All filters</ButtonText>
        </Button>
      </HStack>

      {/* profile */}
      <HStack
        sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}
        gap="$4"
        p="$4"
      >
        <Icon color="$white" as={Grip} />
        <Icon color="$white" as={User} />
      </HStack>
    </HStack>
  );
};

export default RestaurantView;
