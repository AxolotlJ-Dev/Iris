import { Navbar, Link ,Text, Avatar, Dropdown } from "@nextui-org/react";
import SignOut from "./SignOut";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const collapseItems = [
    <NavLink to="/">Home</NavLink> ,
    "User",
    <NavLink to="Chat-Room">Chat Room</NavLink> ,
    "Account",
    <SignOut />,
    // "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    //
  ];

  return (
    <Navbar style={{ zIndex: "99" }} isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit" hideIn="xs">
          Iris
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <NavLink to="/">
          <Navbar>Home</Navbar>
        </NavLink>
        <Navbar.Link href="#">User</Navbar.Link>
        <NavLink to="Chat-Room">
          <Navbar>Chat Room</Navbar>
        </NavLink>
        <Navbar.Link href="#">Account</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="data:image/jpeg;base64,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"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {props.Email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              Profile
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Account</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>

            <Dropdown.Item key="logout" withDivider color="error">
              <SignOut btnWFull="btnWFull" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse >
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : ""
            }}
            isActive={index === 0}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
