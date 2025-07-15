type Props = {
  hello: string

}

type TypeNameProps = {
  name: string
  age: number
  married?: boolean // Optional property
};


type mosProps = {
  hello: propertyType;
  num?: anotherType;
};

const Mos = () => {
  const handleChange: props = (event) => {
    event.preventDefault();
    // event handling code
  };
  return (



    <>
      <div className="className">
        Hello world
      </div>
      <label htmlFor="okay2">Label</label>
      <input
          type="text"
          id="okay2"
          name="okay2"
          // value={}
          onChange={handleChange}
          placeholder="Placeholder"
      />
    </>
  );
};

export default Mos;
