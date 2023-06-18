import React, { useEffect } from "react";
import BasicExample from "./PostCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import { usePost } from "../../contexts/PostContextProvider";
import PostCard from "./PostCard";

function PostList() {
  const { getPosts, posts } = usePost();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <Container>
        <Stack direction="horizontal" gap={3} style={{ margin: "1em 0" }}>
          <Form.Control className="me-auto" placeholder="search for posts" />
          <div className="vr" />
          <Button variant="outline-danger">Reset</Button>
        </Stack>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "1em",
          }}
        >
          {posts?.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PostList;
