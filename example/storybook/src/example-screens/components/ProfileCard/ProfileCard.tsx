import React from 'react';
import { Text } from '@gluestack-ui-new/themed';
import Card from '../Card';
import InfoStack from '../InfoStack';
import UserCard from '../UserCard';
import UserCardAvatar from '../UserCardAvatar';
import UserCardStack from '../UserCardStack';

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
    <Card>
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
        <InfoStack mt="$7" stackData={profileInfo} />
      </UserCard>
    </Card>
  );
};

export default ProfileCard;
