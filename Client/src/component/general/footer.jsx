import React from "react";
import { Grid, Text, Group } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaYoutube, FaTwitterSquare } from "react-icons/fa";
import "../../css/footer.css";

export default function Footer() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <div className="footer">
                <Grid className="footer-grid" columns={12} justify="center">
                    <Grid.Col
                        xl={2}
                        lg={2}
                        md={12}
                        sm={12}
                        xs={12}
                        className="footer-logo-container"
                    >
                        <Logo classname="footer-logo" />
                    </Grid.Col>
                    <Grid.Col xl={2} lg={2} md={6} sm={6} xs={6}>
                        <Text weight={700} size="xl" className="footer-title">
                            Shop
                        </Text>
                        <Link
                            to="/products"
                            style={{ textDecoration: "none" }}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Đồng hồ điện tử
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Đồng hồ cổ điển
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Đồng hồ treo tường
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Đồng hồ hạng sang
                            </Text>
                        </Link>
                    </Grid.Col>
                    <Grid.Col xl={2} lg={2} md={6} sm={6} xs={6}>
                        <Text weight={700} size="xl" className="footer-title">
                            Thông tin
                        </Text>
                        <Link
                            to="/introduction"
                            style={{ textDecoration: "none" }}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Giới thiệu
                            </Text>
                        </Link>
                        <Link
                            to="/news"
                            style={{ textDecoration: "none" }}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Diễn đàn
                            </Text>
                        </Link>
                        <Link
                            to="/contact"
                            style={{ textDecoration: "none" }}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Liên hệ
                            </Text>
                        </Link>
                    </Grid.Col>
                    <Grid.Col xl={2} lg={2} md={6} sm={6} xs={6}>
                        <Text weight={700} size="xl" className="footer-title">
                            Hỗ trợ
                        </Text>
                        <Link
                            to="/introduction"
                            style={{ textDecoration: "none" }}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                FAQ
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Ship và trả hàng
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Chính sách bảo hành
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                Chính sách đổi trả
                            </Text>
                        </Link>
                    </Grid.Col>
                    <Grid.Col xl={2} lg={2} md={6} sm={6} xs={6}>
                        <Text weight={700} size="xl" className="footer-title">
                            Liên hệ
                        </Text>
                        <Text weight={500} size="md" className="footer-text">
                            Đường dây nóng: 01274748901
                        </Text>
                        <Text weight={500} size="md" className="footer-text">
                            Email: 123@gmail.com
                        </Text>
                        <Text weight={500} size="md" className="footer-text">
                            Địa chỉ: HVKTQS, Bắc Từ Liêm, Hà Nội
                        </Text>
                        <Group>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                <FaFacebookSquare size={30} />
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                <FaYoutube size={30} />
                            </Text>
                            <Text
                                weight={500}
                                size="md"
                                className="footer-text"
                            >
                                <FaTwitterSquare size={30} />
                            </Text>
                        </Group>
                    </Grid.Col>
                </Grid>
                <Text
                    align="center"
                    style={{ backgroundColor: "#373A40", color: "#fff" }}
                >
                    © Copyright by Elite
                </Text>
            </div>
        </>
    );
}
