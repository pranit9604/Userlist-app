const UserDetail = ({ user }) => (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
    </div>
  );
  
  export default UserDetail;