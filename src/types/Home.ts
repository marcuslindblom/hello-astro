import { type Content, Image } from '@strifeapp/types'

export type Home = Content & {
  eyebrow: string;
  heading: string;
  description: string;
  image: Image;
};