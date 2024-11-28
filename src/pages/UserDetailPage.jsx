import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserDetail from "../components/UserDetail";

const UserDetailPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => 
    state.users.users.find((user) => user.id === parseInt(id))
  );

  if (!user) return <p>User not found.</p>;

  return <UserDetail user={user} />;
};

export default UserDetailPage;