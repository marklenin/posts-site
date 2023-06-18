import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import turtle from "../../assets/470x600design_01.jpg";
import backImg from "../../assets/Background of Profile Image.jpg";

function PostCard({ post }) {
  console.log(post);
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={backImg} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
