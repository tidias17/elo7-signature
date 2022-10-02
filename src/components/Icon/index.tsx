import React from 'react';

import LogoManga from './images/logo-manga';
import LogoWhite from './images/logo-white';
import Tag from './images/tag';

const ICONS = {
  'logo-manga': <LogoManga />,
  'logo-white': <LogoWhite />,
  'tag': <Tag />,
};

export type IconProps = {
  name: keyof typeof ICONS;
};

export const Icon = ({ name }: IconProps) => (ICONS[name] ? ICONS[name] : null);
