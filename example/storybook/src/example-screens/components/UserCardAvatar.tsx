import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui-new/themed';

const ComponentAvatar = ({ name, src, ...props }: any) => {
  return (
    <Avatar {...props}>
      <AvatarFallbackText>{name.charAt(0)}</AvatarFallbackText>
      <AvatarImage source={src} />
    </Avatar>
  );
};

export default ComponentAvatar;
