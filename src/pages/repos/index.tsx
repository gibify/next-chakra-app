import axios from "axios";
import { GetServerSideProps } from "next";

type Data = {
  data: {
    id: number;
    full_name: string;
  }[]
}
function Repos({ data }: Data) {
  return (

    <ul>
      {data.map((item) => (<li key={item.id}>{item.full_name}</li>))}
    </ul>
  )
}

export default Repos;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<Data>('https://api.github.com/users/gibify/repos');
  return {
    props: { data }
  }
}