import Card from "../components/card/Card";
const UserInfo = () => {
  return (
    <div className="bg-Neutral-50 p-10">
      <div className="py-5">
        <h1 className="text-xl">Perfil de usuario</h1>
        <h2 className="text-gray-600">
          Esta es tu información personal y de tu empresa
        </h2>
      </div>
      <div>
        <Card>
          <div>
            <h2 className="text-lg">Información personal</h2>
          </div>
          <div>
            <h3 className="text-sm">Nombre y apellido</h3>
            <h2>Juan Ferna</h2>
          </div>
          <div>
            <h3 className="text-sm">Número de contacto</h3>
            <h2>323232323</h2>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;
