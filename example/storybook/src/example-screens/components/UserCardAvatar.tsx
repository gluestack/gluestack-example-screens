import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui-new/themed';

const UserCardAvatar = ({ name, src, ...props }: any) => {
  return (
    <Avatar {...props}>
      <AvatarFallbackText>{name}</AvatarFallbackText>
      <AvatarImage source={src} />
    </Avatar>
  );
};

export default UserCardAvatar;
