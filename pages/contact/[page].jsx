import { useRouter } from "next/router";
import React from "react";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const page = router.query.page;

  return (
    <h1 className="font-bold text-red-800 ">this is dynmaic page no {page} </h1>
  );
};

export default index;
