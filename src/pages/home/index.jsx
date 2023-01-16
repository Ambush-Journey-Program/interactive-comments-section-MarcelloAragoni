import Button from '../../components/button/';

export default function Home() {
  return (
    <>
      <Button variant="send">Send</Button>
      <Button icon="reply" variant="ghost">
        Reply
      </Button>
      <Button icon="delete" variant="delete">
        Delete
      </Button>
      <Button icon="edit" variant="ghost">
        Edit
      </Button>
    </>
  );
}
