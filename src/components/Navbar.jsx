import React, { useState } from "react";
import { Menu, Input, Drawer, Button } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Search } = Input;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false); // State for mobile search

  const onSearch = (value) => {
    console.log("Search:", value);
    // Implement search logic here
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle the search visibility
  };

  return (
    <div className="bg-white shadow-lg">
      <nav className="mx-2 md:mx-16 lg:mx-24">
        <div className="container mx-auto flex items-center justify-between h-16">
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined className="text-2xl" />}
              onClick={showDrawer}
            />
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            <a href="/">SHOP.CO</a>
          </div>

          {/* Desktop Menu */}
          <Menu
            mode="horizontal"
            className="hidden md:flex space-x-4 bg-transparent border-none"
          >
            <Menu.Item key="home">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="products">
              <a href="/products">Products</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="/about">About</a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="/contact">Contact</a>
            </Menu.Item>
          </Menu>

          {/* Search Bar, Wishlist, Cart, and User Icons for Desktop */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="lg:hidden">
              <Button
                type="text"
                icon={<SearchOutlined className="text-xl text-black" />}
                onClick={toggleSearch} // Toggle search visibility
              />
            </div>
            {searchVisible && ( // Conditional rendering for mobile search
              <div className="absolute top-16 left-0 right-0 pb-1 bg-white z-10">
                <Search
                  placeholder="Search products"
                  onSearch={onSearch}
                  enterButton
                />
              </div>
            )}
            <div className="hidden lg:block mx-4 w-64">
              <Search
                placeholder="Search products"
                onSearch={onSearch}
                enterButton
              />
            </div>
            <a
              href="/wishlist"
              className="text-xl text-gray-600 hover:text-blue-500"
            >
              <HeartOutlined />
            </a>
            <a
              href="/cart"
              className="text-xl text-gray-600 hover:text-blue-500"
            >
              <ShoppingCartOutlined />
            </a>
            <a
              href="/profile"
              className="text-xl text-gray-600 hover:text-blue-500"
            >
              <UserOutlined />
            </a>
          </div>

          {/* Mobile Drawer Menu */}
          <Drawer
            title="Menu"
            placement="left"
            onClose={onClose}
            visible={drawerVisible}
          >
            <Menu
              mode="vertical"
              className="space-y-4 bg-transparent border-none"
            >
              <Menu.Item key="home">
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item key="products">
                <a href="/products">Products</a>
              </Menu.Item>
              <Menu.Item key="about">
                <a href="/about">About</a>
              </Menu.Item>
              <Menu.Item key="contact">
                <a href="/contact">Contact</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
