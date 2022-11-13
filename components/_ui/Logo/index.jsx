import { Box, Image } from "@chakra-ui/react";

export default function Logo({src, w, ...props}) {
  return (
    <Box w={w}>
      <Image src={src} alt="logo" />
    </Box>
  );
}
