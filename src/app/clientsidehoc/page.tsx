"use client"

import withAuth from "../../components/withAuth";

const clientSideHOC = () => {
  return <div>This page is protected route on client side HOC</div>;
};

export default withAuth(clientSideHOC);
