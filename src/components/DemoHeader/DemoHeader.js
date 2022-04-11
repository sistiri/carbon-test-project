import React from "react";
// import { Link } from "react-router-dom";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";

import { Switcher, Notification, UserAvatar } from "@carbon/icons-react";
import { Link } from "react-router-dom";

const DemoHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Demo Project">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName prefix="CARBON">Demo Project</HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem element={Link} to="/demo">Demo Page</HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/about">
            About Page
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/demo">Demo Page</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/about">About Page</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <Switcher />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default DemoHeader;
