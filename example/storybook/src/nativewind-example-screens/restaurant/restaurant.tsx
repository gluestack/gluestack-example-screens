import {
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Image,
  Text,
  VStack,
} from '@/components/nativewind';
import React from 'react';
import { ChefHat, Clock4, SlidersHorizontal, Star } from 'lucide-react-native';
import Map from '../../example-screens/restaurant/map';

// const restaurantList = [
//   {
//     restaurantName:
//       'VYANA - World Cuisine | Mocktails | Al Fresco Rooftop Dining',
//     rating: 4.3,
//     numberOfPeople: '7290',
//     restaurantType: 'Restaurant',
//     address: 'No.121/17-2/1, Sai Bhavana, 4th Floor, 9th Cross Rd',
//     restaurantOpen: true,
//     restaurantTiming: '11:30 pm',
//     delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
//     deliveryContact: 'No-contact delivery' || 'delivery',
//     restaurantImage: require('../assets/restaurant1.jpg'),
//   },
//   {
//     restaurantName: 'Swad Royal Family Restaurant',
//     rating: 3.9,
//     numberOfPeople: '1235',
//     restaurantType: 'North Indian',
//     address: '1st floor, opposite Mantri Apartment',
//     restaurantOpen: false,
//     restaurantTiming: '11 pm',
//     delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
//     deliveryContact: 'No-contact delivery' || 'delivery',
//     restaurantImage: require('../assets/restaurant2.jpg'),
//   },
//   {
//     restaurantName:
//       'VYANA - World Cuisine | Mocktails | Al Fresco Rooftop Dining',
//     rating: 4.3,
//     numberOfPeople: '7290',
//     restaurantType: 'Restaurant',
//     address: 'No.121/17-2/1, Sai Bhavana, 4th Floor, 9th Cross Rd',
//     restaurantOpen: true,
//     restaurantTiming: '11:30 pm',
//     delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
//     deliveryContact: 'No-contact delivery' || 'delivery',
//     restaurantImage: require('../assets/restaurant1.jpg'),
//   },
//   {
//     restaurantName: 'Swad Royal Family Restaurant',
//     rating: 3.9,
//     numberOfPeople: '1235',
//     restaurantType: 'North Indian',
//     address: '1st floor, opposite Mantri Apartment',
//     restaurantOpen: false,
//     restaurantTiming: '11 pm',
//     delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
//     deliveryContact: 'No-contact delivery' || 'delivery',
//     restaurantImage: require('../assets/restaurant2.jpg'),
//   },
//   {
//     restaurantName:
//       'VYANA - World Cuisine | Mocktails | Al Fresco Rooftop Dining',
//     rating: 4.3,
//     numberOfPeople: '7290',
//     restaurantType: 'Restaurant',
//     address: 'No.121/17-2/1, Sai Bhavana, 4th Floor, 9th Cross Rd',
//     restaurantOpen: true,
//     restaurantTiming: '11:30 pm',
//     delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
//     deliveryContact: 'No-contact delivery' || 'delivery',
//     restaurantImage: require('../assets/restaurant1.jpg'),
//   },
//   {
//     restaurantName: 'Swad Royal Family Restaurant',
//     rating: 3.9,
//     numberOfPeople: '1235',
//     restaurantType: 'North Indian',
//     address: '1st floor, opposite Mantri Apartment',
//     restaurantOpen: false,
//     restaurantTiming: '11 pm',
//     delivery: 'Takeaway' || 'Kerbise pickup' || 'Drive-through',
//     deliveryContact: 'No-contact delivery' || 'delivery',
//     restaurantImage: require('../assets/restaurant2.jpg'),
//   },
// ];

// const RestaurantList = ({ restaurants }) => {
//   return (
//     <VStack className="m-4">
//       {restaurants.map((restaurant, index) => (
//         <RestaurantCard key={index} restaurant={restaurant} />
//       ))}
//     </VStack>
//   );
// };

// const RestaurantCard = ({ restaurant }) => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const renderRatingStars = () => {
//     const filledStars = Math.floor(rating);
//     const halfStars = Math.ceil(rating - filledStars);
//     const emptyStars = 5 - filledStars - halfStars;

//     const stars = [];

//     // Filled stars
//     for (let i = 0; i < filledStars; i++) {
//       stars.push(
//         <Icon color="$amber500" sx={{ fill: '$amber500' }} as={Star} />
//       );
//     }

//     // Half stars
//     for (let i = 0; i < halfStars; i++) {
//       stars.push(<Icon color="$amber500" as={Star} />);
//     }

//     // Empty stars
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<Icon color="$amber500" as={Star} />);
//     }

//     return stars;
//   };

//   const {
//     restaurantName,
//     rating,
//     numberOfPeople,
//     restaurantType,
//     address,
//     restaurantOpen,
//     restaurantTiming,
//     delivery,
//     deliveryContact,
//     restaurantImage,
//   } = restaurant;

//   return (
//     <Pressable onPress={handleOpen}>
//       <VStack className="mb-5 pb-5 border-b border-border-200 bg-background-0"
//         sx={{ ':hover': { bg: '$red600' } }}
//       >
//         <HStack className="justify-between">
//           <VStack className="mb-1 flex-1 mr-3">
//             <Text className="text-lg font-bold">
//               {restaurantName}
//             </Text>
//             <HStack space="xs">
//               <Text className="text-md font-medium">
//                 {rating}
//               </Text>
//               <Text>{renderRatingStars()}</Text>
//               <Text className="text-md text-text-500">
//                 ({numberOfPeople})
//               </Text>
//             </HStack>
//             <Text className="text-md" >
//               {restaurantType} <Icon as={Dot} /> {address}
//             </Text>
//             <HStack>
//               <Text
//                 className="text-md"
//                 color={restaurantOpen ? '$green500' : '$red500'}
//               >
//                 {restaurantOpen ? 'Open' : 'Closed'}
//               </Text>
//               <Icon as={Dot} />
//               <Text className="text-md text-text-500" >
//                 {restaurantOpen ? 'Closes' : 'Opens'} {restaurantTiming}
//               </Text>
//             </HStack>
//           </VStack>
//           <Image className="w-20 h-20 rounded-md" source={restaurantImage} />
//         </HStack>
//         <VStack className="mt-3">
//           <HStack>
//             <Text className="text-md" >Dine in</Text>
//             <Icon as={Dot} />
//             <Text className="text-md">{delivery}</Text>
//             <Icon as={Dot} />
//             <Text className="text-md">{deliveryContact}</Text>
//           </HStack>
//           <Button className="rounded-full bg-primary-500 mt-2">
//             <ButtonText>RESERVE A TABLE</ButtonText>
//           </Button>
//         </VStack>
//       </VStack>

//       <Modal
//         isOpen={isOpen}
//         onClose={handleClose}
//         // placement="right"
//         trigger={(triggerProps) => {
//           return <Pressable {...triggerProps} />;
//         }}
//       >
//         <ModalBackdrop />
//         <ModalContent h="$4/5">
//           <ModalHeader zIndex={999}>
//             <HStack w="$full" position="relative">
//               <ModalCloseButton
//                 bg="$background0"
//                 borderRadius="$full"
//                 position="absolute"
//                 top={0}
//                 right={0}
//                 mt="$2"
//                 mr="$2"
//                 onPress={handleClose}
//               >
//                 <Icon as={CloseIcon} />
//               </ModalCloseButton>
//             </HStack>
//           </ModalHeader>

//           <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//             <ModalBody h="100vh">
//               <Image className="w-full h-64 rounded-md"
//                 source={restaurantImage}
//                 resizeMode="cover"
//               />
//               <Heading className="font-normal text-2xl mt-3 mb-3">
//                 {restaurantName}
//               </Heading>
//               <HStack space="xs">
//                 <Text className="text-md font-medium">
//                   {rating}
//                 </Text>
//                 <Text>{renderRatingStars()}</Text>
//                 <Text className="text-md text-text-500" >
//                   ({numberOfPeople})
//                 </Text>
//               </HStack>
//               <Text className="text-md text-text-500">
//                 {restaurantType}
//               </Text>
//               <HStack className="px-3 justify-between items-center"
//               >
//                 <VStack className="items-center" >
//                   <Icon as={CornerUpRight} />
//                   <Text>Directions</Text>
//                 </VStack>
//                 <VStack className="items-center">
//                   <Icon as={Save} />
//                   <Text>Save</Text>
//                 </VStack>
//                 <VStack className="items-center">
//                   <Icon as={MapPin} />
//                   <Text>Nearby</Text>
//                 </VStack>
//                 <VStack className="items-center">
//                   <Icon as={Smartphone} />
//                   <Text>Send to phone</Text>
//                 </VStack>
//                 <VStack className="items-center">
//                   <Icon as={Share2} />
//                   <Text>Share</Text>
//                 </VStack>
//               </HStack>
//               <Button className="rounded-full bg-primary-500 mt-3">
//                 <ButtonText color="$white">RESERVE A TABLE</ButtonText>
//               </Button>
//               <HStack className="px-3 justify-between items-center"
//               >
//                 <VStack>
//                   <HStack>
//                     <Icon as={Check} />
//                     <Text>Dine-in</Text>
//                     <Icon as={Dot} />
//                     <Icon as={Check} />
//                     <Text>Kerbside pickup</Text>
//                   </HStack>
//                   <HStack>
//                     <Icon as={Check} />
//                     <Text>{deliveryContact}</Text>
//                   </HStack>
//                 </VStack>
//                 <Icon as={ChevronRightIcon} />
//               </HStack>
//               <VStack className="px-3 gap-3">
//                 <HStack className="gap-3" gap="$3">
//                   <Icon as={MapPin} />
//                   <Text>{address}</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Clock5} />
//                   <VStack>
//                     <HStack>
//                       <Text
//                         fontSize="$md"
//                         color={restaurantOpen ? '$green500' : '$red500'}
//                       >
//                         {restaurantOpen ? 'Open' : 'Closed'}
//                       </Text>
//                       <Icon as={Dot} />
//                       <Text fontSize="$md">
//                         {restaurantOpen ? 'Closes' : 'Opens'} {restaurantTiming}
//                       </Text>
//                       <Icon as={ChevronDownIcon} />
//                     </HStack>
//                     <Text>Updated by this business 6 weeks ago</Text>
//                   </VStack>
//                 </HStack>
//                 <HStack className="gap-3" >
//                   <Icon as={CalendarDaysIcon} />
//                   <Text>Find a table</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Car} />
//                   <VStack>
//                     <Text>Place an order</Text>
//                     <Text>swiggy.com</Text>
//                   </VStack>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={UtensilsCrossed} />
//                   <VStack>
//                     <Text>Menu</Text>
//                     <Text>linktr.ee</Text>
//                   </VStack>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Globe2} />
//                   <Text>thevyana.com</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Phone} />
//                   <Text>099164 66266</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={LocateFixed} />
//                   <Text>WH6W+35 Bengaluru, Karnataka</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Smartphone} />
//                   <Text>Send to your phone</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={HeartHandshake} />
//                   <Text>LGBTQ+ friendly</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Heart} />
//                   <Text>Identifies as women-owned</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={History} />
//                   <Text>Your Maps activity</Text>
//                 </HStack>
//                 <HStack className="gap-3">
//                   <Icon as={Tag} />
//                   <Text>Add a label</Text>
//                 </HStack>
//               </VStack>

//               <Button className="gap-1.5 rounded-full"
//                 size="md"
//                 variant="solid"
//                 action="primary"
//                 isDisabled={false}
//                 isFocusVisible={false}
//               >
//                 <ButtonIcon as={Pen} />
//                 <ButtonText>Suggest an edit</ButtonText>
//               </Button>

//               <Text className="px-4 font-medium text-md">
//                 Updates from customers
//               </Text>
//               <Pressable>
//                 <HStack className="border rounded-md items-center"
//                   sx={{
//                     ':hover': {
//                       shadowColor: '$trueGray800',
//                       shadowOffset: { width: 0, height: -2 },
//                       shadowOpacity: 0.1,
//                       shadowRadius: 10,
//                     },
//                   }}
//                 >
//                   <VStack className="gap-2 flex-1 p-3">
//                     <Text className="text-left" >
//                       Amazing food, at an even amazing price! Must go if you’re
//                       looking for a delightful experience.
//                     </Text>
//                     <Text className="text-sm">10 months ago</Text>
//                   </VStack>
//                   <Image className="w-1/2 h-full overflow-hidden"
//                     source={require('../assets/updateImage.jpg')}
//                   />
//                 </HStack>
//               </Pressable>

//               <Text className="px-4 font-medium text-md">
//                 Photos & videos
//               </Text>
//               <ScrollView
//                 showsHorizontalScrollIndicator={false}
//                 horizontal={true}
//               >
//                 <HStack class="mt-1 gap-3" >
//                   <Image className="rounded-lg"
//                     h={149}
//                     width={112}
//                     source={require('../assets/restaurant1.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo1.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo2.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo3.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo4.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo5.jpg')}
//                   />

//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo6.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo7.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo8.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo9.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo10.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo11.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo12.jpg')}
//                   />

//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo13.jpg')}
//                   />
//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo14.jpg')}
//                   />

//                   <Image
//                     h={149}
//                     width={112}
//                     className="rounded-lg"
//                     source={require('../assets/photo15.jpeg')}
//                   />
//                 </HStack>
//               </ScrollView>
//               <Button className="rounded-full mx-3 gap-1.5" >
//                 <ButtonIcon as={Camera} />
//                 <ButtonText>Add media</ButtonText>
//               </Button>
//               <Text className="px-3 font-medium text-md">
//                 Questions and answers
//               </Text>
//               <VStack className="gap-3">
//                 <HStack className="justify-between">
//                   <Text>Is 24 hour service available?</Text>
//                   <Image className="h-6 w-6"
//                     source={require('../assets/QAImage.png')}
//                   />
//                 </HStack>
//                 <HStack className="items-center justify-between">
//                   <Text>Answer this question</Text>
//                   <Text className="font-normal text-xs">
//                     2 months ago
//                   </Text>
//                 </HStack>
//               </VStack>
//               <HStack className="px-3 gap-3">
//                 <Image className="h-8 w-8"
//                   source={require('../assets/community.png')}
//                 />

//                 <Input className="h-9 flex-1"
//                   variant="outline"
//                   isDisabled={false}
//                   isInvalid={false}
//                   isReadOnly={false}
//                 >
//                   <InputField placeholder="Ask the community" />
//                 </Input>
//               </HStack>

//               <Text className="px-3 font-medium text-md">
//                 Review summary
//               </Text>
//               <HStack className="items-center justify-between">
//                 <VStack className="items-center" >
//                   <HStack className="gap-3" >
//                     <Text class="text-sm" >5</Text>
//                     <Progress value={100} className="w-[300px]">
//                       <ProgressFilledTrack />
//                     </Progress>
//                   </HStack>
//                   <HStack className="gap-3" >
//                     <Text class="text-sm">4</Text>
//                     <Progress value={30} className="w-[300px]">
//                       <ProgressFilledTrack />
//                     </Progress>
//                   </HStack>
//                   <HStack className="gap-3" >
//                     <Text class="text-sm">3</Text>
//                     <Progress value={15} className="w-[300px]">
//                       <ProgressFilledTrack />
//                     </Progress>
//                   </HStack>
//                   <HStack className="gap-3" >
//                     <Text class="text-sm">2</Text>
//                     <Progress value={7} className="w-[300px]">
//                       <ProgressFilledTrack />
//                     </Progress>
//                   </HStack>
//                   <HStack className="gap-3" >
//                     <Text class="text-sm">1</Text>
//                     <Progress value={10} className="w-[300px]">
//                       <ProgressFilledTrack />
//                     </Progress>
//                   </HStack>
//                 </VStack>
//                 <VStack>
//                   <Text class="text-5xl" fontSize="$5xl">{rating}</Text>
//                   <Text>{renderRatingStars()}</Text>
//                   <Text>{numberOfPeople} reviews</Text>
//                 </VStack>
//               </HStack>

//               <VStack className="px-3" space="2xl">
//                 <HStack className="items-center" space="md">
//                   <Avatar>
//                     <AvatarFallbackText>SS</AvatarFallbackText>
//                     <AvatarImage source={require('../assets/review1.png')} />
//                   </Avatar>
//                   <VStack className="flex-1">
//                     <Text size="sm">
//                       "Place you can get homely cooked food and the service was
//                       amazing...."
//                     </Text>
//                   </VStack>
//                 </HStack>
//                 <HStack className="items-center" space="md">
//                   <Avatar>
//                     <AvatarFallbackText>SS</AvatarFallbackText>
//                     <AvatarImage source={require('../assets/review2.png')} />
//                   </Avatar>
//                   <VStack className="flex-1">
//                     <Text size="sm">
//                       "Their Chinese dishes tastes better than regular Chinese
//                       Restaurants."
//                     </Text>
//                   </VStack>
//                 </HStack>
//                 <HStack className="items-center" space="md">
//                   <Avatar>
//                     <AvatarFallbackText>SS</AvatarFallbackText>
//                     <AvatarImage source={require('../assets/review3.png')} />
//                   </Avatar>
//                   <VStack className="flex-1">
//                     <Text size="sm">
//                       "Didn't like the food quality, ambiance, locality, staff."
//                     </Text>
//                   </VStack>
//                 </HStack>
//               </VStack>
//               <Button class="rounded-full mx-3 gap-1.5">
//                 <ButtonIcon as={MessageCircleIcon} />
//                 <ButtonText>Write a review</ButtonText>
//               </Button>
//               <HStack className="px-3 justify-between "">
//                 <Text className="font-medium text-md">
//                   Reviews
//                 </Text>
//                 <HStack>
//                   <Icon as={Search} />
//                   <HStack>
//                     <Icon />
//                     <Text>Sort</Text>
//                   </HStack>
//                 </HStack>
//               </HStack>

//               <HStack classNAme="px-3 justify-between items-center"
//               >
//                 <HStack className="items-center" space="md">
//                   <Avatar className="bg-indigo-600">
//                     <AvatarFallbackText>KshemaHegde</AvatarFallbackText>
//                     <AvatarBadge className="dark:border-black"/>
//                   </Avatar>
//                   <VStack>
//                     <Heading size="sm">Kshema Hegde</Heading>
//                     <Text size="sm">Local Guide · 8 reviews · 15 photos</Text>
//                   </VStack>
//                 </HStack>
//                 <Icon as={MoreVertical} />
//               </HStack>
//               <VStack className="gap-3">
//                 <Text>
//                   Everything was perfect, it was truly great. Had an extremely
//                   pleasant experience and the staff Maaz gave excellent
//                   recommendations and beautiful service. He was extremely
//                   helpful and kind . Will definitely visit again. The desserts
//                   were a highlight of the night today! ✨ It’s also a pet
//                   friendly cafe and they even gave my puppy a water bowl without
//                   us asking. Big props to Maaz & the Dessert Chef💚
//                 </Text>
//                 <Image className="h-72 w-full"
//                   // flex={1}
//                   source={require('../assets/review4.jpg')}
//                 />
//               </VStack>
//               <HStack className="px-3 gap-3" >
//                 <Icon as={Share2} />
//                 <Text>Share</Text>
//               </HStack>
//             </ModalBody>
//           </ScrollView>
//         </ModalContent>
//       </Modal>
//     </Pressable>
//   );
// };

const Restaurant = () => {
  return (
    <HStack className="h-lvh w-full border border-border-200 rounded-lg bg-background-0 justify-between relative">
      <Map />
      <HStack>
        {/* sidebar */}
        <VStack
          className="p-4 border-r border-border-200 items-center gap-6 bg-background-0 shadow-trueGray-800 rounded-l-lg"
          sx={{ '@base': { display: 'none' }, '@lg': { display: 'flex' } }}
          style={{
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            // zIndex: 2,
          }}
        >
          <Image
            className="w-6 h-6"
            source={require('../../example-screens/assets/google_maps.png')}
          />
          <VStack className="gap-2 items-center">
            {/* <Icon w="$4" h="$4" color="$background500" as={Bookmark} /> */}
            <Text className="text-2xs text-text-500">Saved</Text>
          </VStack>
          <VStack className="gap-2 items-center">
            {/* <Icon w="$4" h="$4" color="$background400" as={History} /> */}
            <Text className="text-2xs text-text-500">Recents</Text>
          </VStack>
        </VStack>
        {/* restaurant list */}
        <VStack
          className="shadow-trueGray-800 border-r border-border-200 bg-background-0"
          style={{
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            // zIndex: 1,
          }}
          sx={{
            '@md': { w: '$102' },
            '@xs': { w: '$96' },
            '@base': { w: '$72' },
          }}
        >
          {/* <Input
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
          </Input> */}

          {/* <ScrollView> */}
          <HStack className="m-4 items-center gap-0.5">
            <Text className="text-lg font-normal">Results</Text>
            {/* <Icon as={AlertCircleIcon} /> */}
          </HStack>

          {/* <RestaurantList restaurants={restaurantList} /> */}
          {/* </ScrollView> */}
        </VStack>
      </HStack>

      {/* buttons */}
      <HStack
        className="mt-4 h-0"
        sx={{ '@lg': { display: 'flex' }, '@base': { display: 'none' } }}
        space="sm"
      >
        <Button>
          <ButtonIcon as={Star} />
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
        className="gap-4 mt-4 mr-4 h-0"
        sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}
      >
        {/* <Icon color="$white" as={Grip} /> */}
        {/* <Icon color="$white" as={User} /> */}
      </HStack>
    </HStack>
  );
};

export default Restaurant;
