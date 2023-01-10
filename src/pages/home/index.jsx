import { useState } from 'react';
import Input from '../../components/input/';

export default function Home() {
  const [textField, setTextField] = useState();
  console.log(textField);

  return <Input onChange={setTextField} />;
}
