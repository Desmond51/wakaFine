import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  iconName: IconName;
  size?: number;
  color: string;
};

export enum IconName {
  USER = 'user',
  PHONE = 'phone',
  PLAY = 'play',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  HOME = 'home',
  BRIEFCASE = 'briefcase',
  BUS = 'bus',
  BELL = 'bell',
  MENU = 'align-justify',
}

const Icon: React.FC<Props> = ({iconName, size = 25, color = 'black'}) => {
  return (
    <>
      <FontAwesome name={iconName} size={size} color={color} />
    </>
  );
};

export default Icon;
