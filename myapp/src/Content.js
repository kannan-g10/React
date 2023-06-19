import ItemsList from "./itemsList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h1 style={{ color: "orangered" }}>Your list is Empty</h1>
      )}
    </main>
  );
};

export default Content;
