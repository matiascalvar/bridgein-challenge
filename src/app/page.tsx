"use client";

import Loading from "@/components/loading/Loading";
import Post from "@/components/post/Post";
import Pagination from "@/components/pagination/Pagination";
import usePagination from "@/hooks/usePagination";
import usePosts from "@/hooks/usePosts";
import Error from "@/components/error/Error";

const App = () => {
  const { isLoading, data: allPosts, error } = usePosts();

  const { currentPage, itemsPerPage, currentItems, handlePagination } =
    usePagination(allPosts, 5);

  if (isLoading) return <Loading />;
  else if (error) return <Error />;

  return (
    <div>
      {allPosts.length ? (
        <div
          className="flex flex-col items-center"
          style={{ position: "relative", top: "-30px" }}
        >
          {currentItems.map((post) => (
            <Post post={post} key={post.id} mainPage />
          ))}
          <Pagination
            length={allPosts.length}
            postsPerPage={itemsPerPage}
            handlePagination={handlePagination}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <div>No posts available.</div>
      )}
    </div>
  );
};

export default App;
