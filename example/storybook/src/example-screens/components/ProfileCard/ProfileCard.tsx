import React from 'react';
import { Text } from '@gluestack-ui-new/themed';
import Card from '../Card';
import Stats from '../Stats';
import UserCard from '../UserCard';
import UserCardAvatar from '../UserCardAvatar';
import UserCardStack from '../UserCardStack';
import StatsItems from '../StatsItems';
import StatsDivider from '../StatsDivider';
// import CustomInput from '../CustomInput';
// import { SearchIcon } from 'lucide-react-native';

const profileInfo = [
  {
    label: 'posts',
    value: '32',
  },
  {
    label: 'followers',
    value: '8,396',
  },
  {
    label: 'following',
    value: '720',
  },
];

const ProfileCard = () => {
  return (
    <Card w="$72">
      <UserCard direction="column">
        <UserCardAvatar
          name="John Smith"
          src={require('../../assets/avatar-icon.png')}
          h="$9"
          w="$9"
        />
        <UserCardStack mt="$3" alignItems="center">
          <Text fontSize="$sm" fontWeight="$bold" color="$text900">
            John Smith
          </Text>
          <Text mt="$0.5" fontSize="$xs" color="$text700">
            Motivational Speaker
          </Text>
        </UserCardStack>
        <Stats mt="$8">
          {profileInfo?.map((item: any, index: number) => (
            <>
              <StatsItems key={index}>
                <Text fontSize="$sm" color="$text900" fontWeight="$bold">
                  {item?.value}
                </Text>
                <Text
                  fontFamily="$body"
                  fontSize="$xs"
                  color="$text900"
                  fontWeight="$normal"
                >
                  {item?.label}
                </Text>
              </StatsItems>
              {index < profileInfo.length - 1 && <StatsDivider h="$10" />}
            </>
          ))}
        </Stats>
      </UserCard>
      {/* <CustomInput mt="$4" icon={SearchIcon}>
        <InputField type="text" placeholder="Search" />
      </CustomInput> */}
    </Card>
  );
};

export default ProfileCard;
