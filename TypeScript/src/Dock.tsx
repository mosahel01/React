import React from "react";

// type DockProps = {
//   type: string;
//   autofocus: boolean;
// };

type DockProps = React.ComponentPropsWithoutRef<"button">; // if we dont have ref={ref}
// type DockProps = React.ComponentPropsWithRef<Dock>;
// type DockProps = React.ComponentPropsWithRef<button>;

function Dock({ type, autofocus }: DockProps) {
  return (
    <>
      <button type={type} autoFocus={autofocus}>
        Click Me!
      </button>
    </>
  );
}

export default Dock;
