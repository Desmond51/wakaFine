import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native';
import React from 'react';
import Icon, {IconName} from './icon.component';
import styles from './button.styles';
import theme from '../utils/theme';

type Props = {
  btnText: string;
  btnType?: ButtonType;
  icon?: IconName;
  disabled?: boolean;
  loading?: boolean;
  onPress: any;
};

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
}

const Button: React.FC<Props> = ({
  btnText = 'Button',
  btnType = ButtonType.PRIMARY,
  icon,
  disabled = false,
  loading = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        btnType === ButtonType.PRIMARY
          ? styles.btnWrapper
          : btnType === ButtonType.SECONDARY
          ? styles.secondaryWrapper
          : styles.textWrapper,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={
          btnType === ButtonType.PRIMARY
            ? styles.btnText
            : btnType === ButtonType.SECONDARY
            ? styles.secondaryText
            : styles.text
        }>
        {btnText}
      </Text>
      {icon && (
        <>
          <Icon
            iconName={icon}
            size={18}
            color={
              btnType === ButtonType.PRIMARY
                ? 'white'
                : btnType === ButtonType.SECONDARY
                ? 'black'
                : theme.PRIMARY
            }
          />
        </>
      )}
      {loading && (
        <ActivityIndicator
          color={
            btnType === ButtonType.PRIMARY
              ? 'white'
              : btnType === ButtonType.SECONDARY
              ? 'black'
              : theme.PRIMARY
          }
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

/************************************SOCIAL BUTTON  ************************************/

export enum SocialButtonType {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

type SocialProps = {
  type: SocialButtonType;
  disabled?: boolean;
  loading?: boolean;
  onPress: any;
  btnText: string;
};

export const SocialButton: React.FC<SocialProps> = ({
  btnText,
  type,
  disabled = false,
  loading = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        type === SocialButtonType.FACEBOOK
          ? styles.facebookWrapper
          : styles.googleWrapper,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Icon
        iconName={
          type === SocialButtonType.FACEBOOK
            ? IconName.FACEBOOK
            : IconName.GOOGLE
        }
        color={
          type === SocialButtonType.FACEBOOK ? theme.FACEBOOK : theme.GOOGLE
        }
        size={24}
      />
      <Text
        style={
          type === SocialButtonType.FACEBOOK
            ? styles.facebookText
            : styles.googleText
        }>
        {btnText}
      </Text>
      {loading && (
        <ActivityIndicator
          color={
            type === SocialButtonType.FACEBOOK ? theme.FACEBOOK : theme.GOOGLE
          }
        />
      )}
    </TouchableOpacity>
  );
};
