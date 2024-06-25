import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  padding: 1.5rem 2.3rem;
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader className="">
      <UserAvatar />
      <HeaderMenu />
      <Logout />
    </StyledHeader>
  );
}

export default Header;
