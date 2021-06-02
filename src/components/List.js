import Item from "./Item";
import "./List.css";

function List({ listData, listId }) {
  return (
    <div className="list-container">
      <div>List id: {listId}</div>
      <div className="items">
        {listData
          .filter((item) => item.name)
          .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))
          .map((item, index) => {
            return (
              <Item
                key={index}
                name={item.name}
                listId={item.listId}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default List;
