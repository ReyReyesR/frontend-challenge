import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import checkoutImage from "/public/checkout.svg";

const MainHeader = () => {
  const router = useRouter();
  const showBack = router.route === "/review";

  return (
    <header className={classes.header}>
      <a
        href="https://www.checkout.com/"
        target="_blank"
        rel="noreferrer"
        width={185}
        height={24}
        className={classes.logo}
      >
        <Image src={checkoutImage} alt="Checkout Logo" />
      </a>
      {showBack && (
        <nav className={classes.navigation}>
          <Link href="/">Go Back </Link>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
