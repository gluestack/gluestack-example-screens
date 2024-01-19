import React from 'react';
import { AddIcon, Icon, IconButton } from '@gluestack-ui-new/themed';

const IconButtonBasic = ({ ...props }: any) => {
  return (
    <IconButton {...props}>
      <Icon as={AddIcon} color="$white" />
    </IconButton>
  );
};

IconButtonBasic.description = 'Custom Icon Button';

export default IconButtonBasic;
