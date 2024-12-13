import { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import { config } from "../../config";
import { getData } from "../lib";
import { BlogProps } from "../../type";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config?.baseUrl}/blogs`;
      try {
        const data = await getData(endPoint);
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Title text="Our Blog Post" className="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
        {blogData.map((item: BlogProps) => (
          <div key={item?._id} className="group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={item?.image}
                alt="blogImage"
                className="w-full h-auto object-cover group-hover:scale-110 duration-300"
              />
            </div>
            <div>
              <p>{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
