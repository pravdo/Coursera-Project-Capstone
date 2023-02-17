import React, { createContext, useContext, useState } from "react";

const MuiContext = createContext();

export const UseMuiContext = () => useContext(MuiContext);

function MuiContextProvider({ children }) {
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem("order"))
      ? JSON.parse(localStorage.getItem("order"))
      : []
  );
  const [loading, setLoading] = React.useState({});
  const [openModal, setOpen] = useState(false);

  function handleClick(item) {
    setLoading(item);
    const Bool = order.every((orderItem) => orderItem.title !== item.title);
    if (Bool) setOrder([...order, item]);
  }

  function randFunc(item) {
    console.log(item);
  }

  const values = {
    openModal,
    setOpen,
    loading,
    randFunc,
    setLoading,
    handleClick,
    order,
    setOrder,
  };

  return <MuiContext.Provider value={values}>{children}</MuiContext.Provider>;
}

export default MuiContextProvider;
