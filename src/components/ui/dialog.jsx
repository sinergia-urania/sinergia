import React, { useState } from "react";

export function Dialog({ children }) {
  return <div>{children}</div>;
}

export function DialogTrigger({ asChild, children }) {
  const [open, setOpen] = useState(false);
  const trigger = React.Children.only(children);

  return React.cloneElement(trigger, {
    onClick: () => setOpen(true),
    'data-open-dialog': true,
  });
}

export function DialogContent({ children, className = "" }) {
  return (
    <div className={`fixed top-1/2 left-1/2 bg-zinc-900 text-white p-4 rounded shadow transform -translate-x-1/2 -translate-y-1/2 z-50 ${className}`}>
      {children}
    </div>
  );
}
