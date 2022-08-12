import Image, { ImageProps } from "next/image";

import styles from "./Avatar.module.css";

interface AvatarProps extends ImageProps {
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true, ...props }: AvatarProps) {
  return (
    <span className={hasBorder ? styles.avatarWithBOrder : styles.avatar}>
      <Image src={src} alt="Perfil Imagem" height="60" width="60" {...props} />
    </span>
  );
}
