import { useFetchPostsQuery } from "../../store/services";

const Blog = () => {
  const { data, error, isLoading } = useFetchPostsQuery();
  return (
    <div>
      {isLoading
        ? "Loading..."
        : error
        ? "Error"
        : !data
        ? "Нет постов"
        : data.map((el) => (
            <div key={el.id}>
              <h2>{el.title}</h2>
              <p>{el.text}</p>
            </div>
          ))}
    </div>
  );
};

export default Blog;
