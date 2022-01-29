import { useRouter } from "next/router";
import Seo from "../../Components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  console.log(router);
  const [title, id] = params || [];
  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
