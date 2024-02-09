import React from 'react';
import { createIcon } from '@gluestack-ui-new/themed';
import { Circle, Path, G, Svg, Image } from 'react-native-svg';

export const DotIcon = createIcon({
  viewBox: '0 0 7 7',
  path: (
    <>
      <Circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" />
    </>
  ),
});

export const GluestackIcon = createIcon({
  viewBox: '0 0 20 20',
  path: (
    <G id="Group_427319150" fill="#000000">
      <G id="Group_427319148">
        <Path
          id="Rectangle_3467968"
          d="M0 7.94487L9.9998 0.578979V4.05511L0 11.421V7.94487Z"
        />
        <Path
          id="Rectangle_3467969"
          d="M19.9998 7.94499L9.99995 0.579102V4.05523L19.9998 11.4211V7.94499Z"
        />
      </G>
      <G id="Group_427319149">
        <Path
          id="Rectangle_3467968_2"
          d="M0 15.9449L9.9998 8.57898V12.0551L0 19.421V15.9449Z"
        />
        <Path
          id="Rectangle_3467969_2"
          d="M20 15.9449L10.0002 8.57904V12.0552L20 19.4211V15.9449Z"
        />
      </G>
    </G>
  ),
});

export const Avatar1 = () => {
  return (
    <Svg width="72" height="72">
      <Image href={require('../assets/Avatar1.svg')} />
    </Svg>
  );
};
