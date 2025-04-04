import EmptyState from "@/components/common/Movies/EmptyState";
import MyMovies from "@/components/common/Movies/MyMovies";
import React from "react";

const index = () => {
  return (
    <div>
      {/* <EmptyState /> */}
      <MyMovies />
    </div>
  );
};

export default index;
