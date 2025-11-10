import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("userName");

  //   useEffect(() => {

  //   },[])
  return <div>Hi {name}</div>;
};

export default Room;
