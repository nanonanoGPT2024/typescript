import Counter from "./Counter";
import Halo from "./Hallo";
import InputForm from "./InputForm";
import UserList from "./UserList";

const About: React.FC = () => {
  return (
    <div>
      <Halo nama="nanonano" />
      <Halo nama="hmm" umur={11} />
      <Counter />
      <InputForm />
      <UserList />
    </div>
  );
};

export default About;
