import React from "react";

// type DockProps = {
//   type: string;
//   autofocus: boolean;
// };

type DockProps = React.ComponentPropsWithoutRef<"button">; // if we dont have ref={ref}
// type DockProps = React.ComponentPropsWithRef<Dock>;
// type DockProps = React.ComponentPropsWithRef<button>;

function Dock({ type, autoFocus, ...rest }: DockProps) {
  return (
    <>
      <button type={type} autoFocus={autoFocus} {...rest}>
        Click Me!
      </button>
    </>
  );
}

export default Dock;
