import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  Input,
} from '@gluestack-ui/themed';
import { useController } from 'react-hook-form';
import { Text } from '@gluestack-ui/themed';

const CustomInput = ({
  label,
  icon,
  children,
  formControlStyles,
  inputStyles,
  validatorProps,
}: {
  label?: string;
  icon?: any;
  children: any;
  formControlStyles?: any;
  inputStyles?: any;
  validatorProps?: any;
}) => {
  let childrenWithProps;
  if (validatorProps) {
    /* eslint-disable */
    const {
      field: { onChange, onBlur, value },
      fieldState: { error, isTouched },
    } = useController({
      ...validatorProps,
    });
    childrenWithProps = React.cloneElement(children, {
      onBlur: onBlur,
      value: value,
      onChangeText: (text: string) => {
        onChange(text);
        if (isTouched && validatorProps?.trigger) {
          validatorProps.trigger(validatorProps?.name);
        }
      },
    });
    return (
      <FormControl size="sm" {...formControlStyles}>
        {label && (
          <FormControlLabel mb="$2">
            <FormControlLabelText fontSize="$sm">{label}</FormControlLabelText>
          </FormControlLabel>
        )}
        {icon ? (
          <Input borderRadius="$lg" hardShadow="5" {...inputStyles}>
            <InputSlot pl="$3">{icon}</InputSlot>
            {validatorProps ? childrenWithProps : children}
          </Input>
        ) : (
          <Input {...inputStyles}>
            {validatorProps ? childrenWithProps : children}
          </Input>
        )}
        {validatorProps?.trigger && (
          <Text
            color={error ? '$error600' : 'transparent'}
            fontSize="$sm"
            fontFamily="$body"
            mt="$1"
          >
            {error ? error.message : ''}
          </Text>
        )}
      </FormControl>
    );
  }
  return (
    <FormControl size="sm" {...formControlStyles}>
      {label && (
        <FormControlLabel mb="$2">
          <FormControlLabelText fontSize="$sm">{label}</FormControlLabelText>
        </FormControlLabel>
      )}
      {icon ? (
        <Input borderRadius="$lg" hardShadow="5" {...inputStyles}>
          <InputSlot pl="$3">{icon}</InputSlot>
          {children}
        </Input>
      ) : (
        <Input {...inputStyles}>{children}</Input>
      )}
    </FormControl>
  );
};

export default CustomInput;
