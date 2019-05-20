import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import SignOut from "./Signout";
const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>{me.name}</a>
            </Link>
            <SignOut />
          </>
        )}
        {!me && (
          <>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
