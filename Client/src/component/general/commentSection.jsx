import { Grid, Text, MediaQuery, Textarea, Button, Group } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import CommentCard from "./commentCard";
import "../../css/detail.css";
import React from "react";
import axios from "axios";

export default function CommentSection({ id }) {
    const { height, width } = useViewportSize();
    const [comments, setComments] = React.useState([]);
    const user = sessionStorage.getItem("userName");
    const form = useForm({
        initialValues: {
            comment: "",
        },
    });

    React.useEffect(() => {
        axios
            .get(`http://localhost/Server/controllers/comment/get.php?id=${id}`)
            .then((response) => {
                if (typeof response.data !== "string") {
                    setComments(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleComment = (values) => {
        const data = {
            content: values.comment,
            productId: id,
            userName: sessionStorage.getItem("userName"),
        };

        axios
            .post(
                "http://localhost/Server/controllers/comment/post.php",
                JSON.stringify(data)
            )
            .then((response) => {
                if (response.data === "success") {
                    setComments((o) => [
                        ...o,
                        {
                            content: values.comment,
                            userName: sessionStorage.getItem("userName"),
                            comDate: "Hôm nay",
                        },
                    ]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Grid>
            <Grid.Col>
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 900px)"
                    styles={{
                        fontSize: 36,
                        marginLeft: 40,
                        fontWeight: 600,
                    }}
                >
                    <Text className={width < 900 ? "detail-product-name" : ""}>
                        Bình luận
                    </Text>
                </MediaQuery>
            </Grid.Col>
            <Grid.Col>
                {user ? (
                    <form
                        onSubmit={form.onSubmit((values) =>
                            handleComment(values)
                        )}
                    >
                        <Textarea
                            placeholder="Bình luận của bạn"
                            label="Bình luận của bạn"
                            radius="md"
                            size="md"
                            {...form.getInputProps("comment")}
                        />
                        <Group position="right" style={{ marginTop: 10 }}>
                            <Button type="submit">Đăng</Button>
                        </Group>{" "}
                    </form>
                ) : (
                    <Text size={width > 900 ? "xl" : "lg"} align="left">
                        Vui lòng đăng nhập để bình luận
                    </Text>
                )}
            </Grid.Col>
            <Grid.Col>
                {comments.length === 0 ? (
                    <Text
                        weight={500}
                        size={width > 900 ? "xl" : "lg"}
                        align="center"
                    >
                        Hãy là người đầu tiên bình luận về sản phẩm này !
                    </Text>
                ) : (
                    comments.map((comment) => {
                        return (
                            <CommentCard
                                name={comment.userName}
                                date={comment.comDate}
                                content={comment.content}
                            />
                        );
                    })
                )}
            </Grid.Col>
        </Grid>
    );
}
