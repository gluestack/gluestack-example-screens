import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputIcon,
  InputSlot,
  Input,
} from '@gluestack-ui/themed';

const CustomInput = ({ label, icon, children, ...props }: any) => {
  return (
    <FormControl size="sm" {...props}>
      {label && (
        <FormControlLabel mb="$2">
          <FormControlLabelText fontSize="$sm">{label}</FormControlLabelText>
        </FormControlLabel>
      )}
      {icon ? (
        <Input borderRadius="$lg" hardShadow="5">
          <InputSlot pl="$3">
            <InputIcon as={icon} />
          </InputSlot>
          {children}
        </Input>
      ) : (
        <Input>{children}</Input>
      )}
    </FormControl>
  );
};

export default CustomInput;
