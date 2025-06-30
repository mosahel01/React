import Button from "./Button";
import Card from "./Card";
import Dock from "./Dock";

function App() {
  const onClick = () => {
    console.log("Hello world");
    return 5;
  };

  return (
    <>
      <Button
        backgroundColor="blue"
        textColor="white"
        borderRadius={10}
        fontSize={30}
        pillShaped={true}
        padding={[20, 30, 20, 30]} // since padding is a tuple we cannot pass anything but 4 numerical values
        clicking={onClick}
      />
      <Card
        backgroundColor="cyan"
        border="4px solid black"
        borderRadius={20}
        fontSize={20}
        padding={[50, 20]}
        margin={[100, 200]}
        textColor="black"
      />
      <Dock type="submit" autoFocus={true} />
    </>
  );
}

export default App;
