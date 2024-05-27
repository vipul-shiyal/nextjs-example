import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";


const serverSide = () => {
  if(!sessionStatus) {
    redirect('/')
  }
  return <div>This is Server component</div>;
};

export default serverSide;