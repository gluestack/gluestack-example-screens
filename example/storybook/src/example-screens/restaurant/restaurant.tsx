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
  Camera,
} from 'lucide-react-native';
import Map from './map';

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
            <ButtonText>RESERVE A TABLE</ButtonText>
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
        <ModalContent h="$4/5">
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

          <ScrollView bounces={false}>
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

              <Text paddingVertical="$4" fontWeight="$medium" fontSize="$md">
                Updates from customers
              </Text>
              <Pressable>
                <HStack
                  sx={{
                    ':hover': {
                      shadowColor: '$trueGray800',
                      shadowOffset: { width: 0, height: -2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 10,
                    },
                  }}
                  borderWidth={1}
                  borderRadius="$md"
                  alignItems="center"
                >
                  <VStack gap="$2" flex={1} p="$4">
                    <Text textAlign="left">
                      Amazing food, at an even amazing price! Must go if you’re
                      looking for a delightful experience.
                    </Text>
                    <Text fontSize="$sm">10 months ago</Text>
                  </VStack>
                  <Image
                    w="$1/2"
                    h="$full"
                    overflow="hidden"
                    source={require('../assets/updateImage.jpg')}
                  />
                </HStack>
              </Pressable>

              <Text paddingVertical="$4" fontWeight="$medium" fontSize="$md">
                Photos & videos
              </Text>
              <ScrollView horizontal={true}>
                <HStack mt="$1" gap="$3">
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/restaurant1.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo1.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo2.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo3.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo4.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo5.jpg')}
                  />

                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo6.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo7.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo8.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo9.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo10.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo11.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo12.jpg')}
                  />

                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo13.jpg')}
                  />
                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo14.jpg')}
                  />

                  <Image
                    h={149}
                    width={112}
                    borderRadius="$lg"
                    source={require('../assets/photo15.jpeg')}
                  />
                </HStack>
              </ScrollView>
              <Button marginVertical="$3" gap="$1.5">
                <ButtonIcon as={Camera} />
                <ButtonText>Add media</ButtonText>
              </Button>
              <Text paddingVertical="$4" fontWeight="$medium" fontSize="$md">
                Questions and answers
              </Text>
              <VStack>
                <HStack justifyContent="space-between">
                  <Text>Is 24 hour service available?</Text>
                  <Image
                    h="$6"
                    w="$6"
                    source={require('../assets/QAImage.png')}
                  />
                </HStack>
                <HStack justifyContent="space-between">
                  <Text>Answer this question</Text>
                  <Text fontWeight="$normal" fontSize="$xs">
                    2 months ago
                  </Text>
                </HStack>
              </VStack>
              <HStack>
                <Image
                  h="$8"
                  w="$8"
                  source={require('../assets/community.png')}
                />

                <Input
                  h="$9"
                  w="$full"
                  variant="outline"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField w="$full" placeholder="Ask the community" />
                </Input>
              </HStack>
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
      position="relative"
    >
      <Map />

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
            // zIndex: 2,
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
            // zIndex: 1,
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
        mt="$4"
        space="sm"
        h="$0"
        bg="red"
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
        mt="$4"
        mr="$4"
        h="$0"
      >
        <Icon color="$white" as={Grip} />
        <Icon color="$white" as={User} />
      </HStack>
    </HStack>
  );
};

export default RestaurantView;
