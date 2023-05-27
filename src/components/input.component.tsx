import {View, TextInput} from 'react-native';
import React from 'react';
import Icon, {IconName} from './icon.component';
import styles from './input.styles';
import theme from '../utils/theme';

type Props = {
  inputType?: InputType;
  placeholder: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  onPress?: any;
  onChange: any;
};

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  NUMERIC = 'numeric',
}

const Input: React.FC<Props> = ({
  placeholder,
  onChange,
  inputType,
  leftIcon,
  //   rightIcon,
  //   onPress,
}) => {
  return (
    <View>
      <TextInput
        style={[styles.input, leftIcon && styles.withIconLeft]}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.PRIMARY}
        inputMode={
          inputType === InputType.EMAIL
            ? 'email'
            : inputType === InputType.NUMERIC
            ? 'numeric'
            : 'text'
        }
        secureTextEntry={inputType === InputType.PASSWORD}></TextInput>
      {leftIcon && (
        <View style={styles.iconContainer}>
          <Icon iconName={leftIcon} color={theme.PRIMARY} size={25} />
        </View>
      )}
    </View>
  );
};

export default Input;
