// Libraries
import Image, { ImageProps } from 'next/image';

// Types
import { NextComponentType } from 'next';
import { FC } from 'react';

type Props = ImageProps;

const ProfilePicture: FC<Props> = props => (
  <Image
    width={144}
    height={144}
    alt='Profile picture'
    {...props}
  />
);

export default ProfilePicture;
