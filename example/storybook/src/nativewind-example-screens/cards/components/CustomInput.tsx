import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  Input,
  Text,
} from '@/components/nativewind';
import { useController } from 'react-hook-form';

const CustomInput = ({
  label,
  icon,
  children,
  formControlProps,
  inputProps,
  validatorProps,
}: {
  label?: string;
  icon?: any;
  children: any;
  formControlProps?: any;
  inputProps?: any;
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
      <FormControl size="sm" {...formControlProps}>
        {label && (
          <FormControlLabel className="mb-2">
            <FormControlLabelText fontSize="$sm">{label}</FormControlLabelText>
          </FormControlLabel>
        )}
        {icon ? (
          <Input className="rounded-lg" hardShadow="5" {...inputProps}>
            <InputSlot className="pl-3">{icon}</InputSlot>
            {validatorProps ? childrenWithProps : children}
          </Input>
        ) : (
          <Input {...inputProps}>
            {validatorProps ? childrenWithProps : children}
          </Input>
        )}
        {validatorProps?.trigger && (
          <Text
            className="text-sm mt-1"
            color={error ? '$error600' : 'transparent'}
            fontFamily="$body"
          >
            {error ? error.message : ''}
          </Text>
        )}
      </FormControl>
    );
  }
  return (
    <FormControl size="sm" {...formControlProps}>
      {label && (
        <FormControlLabel className="mb-2">
          <FormControlLabelText className="text-sm">
            {label}
          </FormControlLabelText>
        </FormControlLabel>
      )}
      {icon ? (
        <Input className="rounded-lg" hardShadow="5" {...inputProps}>
          <InputSlot className="pl-3">{icon}</InputSlot>
          {children}
        </Input>
      ) : (
        <Input {...inputProps}>{children}</Input>
      )}
    </FormControl>
  );
};

export default CustomInput;
