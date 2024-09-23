import React from "react";
import { Button, Carousel, Col, Menu, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import carousel1 from "../../assets/carousel1.png";
import appleLogo from "../../assets/apple_logo.png";

const Banner = () => {
  const menuItems = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="lg:py-10 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="hidden lg:block w-64 bg-gray-100 px-4 col-span-1">
          <Menu mode="vertical" className="bg-gray-100">
            {menuItems.map((item, index) => (
              <Menu.Item
                key={index}
                className="flex justify-between items-center"
              >
                {item}
                <RightOutlined />
              </Menu.Item>
            ))}
          </Menu>
        </div>

        <div className="bg-black col-span-3">
          <Carousel autoplay>
            {/* Slide 1 */}
            <div className="flex items-center">
              <Row className="w-full">
                <Col
                  span={12}
                  className="p-3 md:p-5 lg:p-16  content-center justify-center items-center"
                >
                  <h2 className="flex items-center">
                    <img
                      className="h-6 w-5 lg:h-12 lg:w-10"
                      src={appleLogo}
                      alt=""
                    />{" "}
                    <span className="font-semibold mt-1 ml-1 md:font-semibold md:text-xl md:mt-2 md:ml-1 lg:font-bold lg:text-2xl lg:mt-4 lg:ml-2 text-white">
                      iPhone 14 Series
                    </span>
                  </h2>
                  <h1 className="font-semibold text-2xl md:text-3xl mt-3 lg:font-bold lg:text-5xl lg:mt-4 text-white">
                    Up to 10% off Voucher
                  </h1>
                  <Button
                    type="primary"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg mt-3 lg:mt-6"
                  >
                    Shop Now
                  </Button>
                </Col>
                <Col span={12}>
                  <img
                    className="py-5 h-[200px] md:h-[300px] lg:h-[400px] w-full object-cover"
                    src={carousel1}
                    alt="iPhone"
                  />
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
