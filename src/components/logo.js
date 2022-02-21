/** @jsx jsx */
import { jsx, Image, Text, Box, Heading } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={image}
        alt="startup landing logo"
        sx={{
          width: 150,
          height: 85,
          objectFit: "contain",
          // border: "1px solid white",
        }}
      />
    </Link>
  );
}
