/** @jsx jsx */
import { jsx, Image, Text, Box, Heading } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ image, className, mobile }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        ...styles.link,
      }}
    >
      <Image src={image} alt="logo" className={className} sx={styles.image} />
    </Link>
  );
}
const styles = {
  link: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    objectFit: "contain",
    transition: "500ms",
    transition: "all 0.4s ease",
    "&.sticky": {
      width: 150,
      height: 85,
    },
  },
};
