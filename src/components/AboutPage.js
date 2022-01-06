import { useParams } from "react-router-dom";

const AboutPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>About Page</h1>
      <p>{params.pageId}</p>
    </div>
  );
};

export default AboutPage;
