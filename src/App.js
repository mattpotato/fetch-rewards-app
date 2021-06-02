import { useEffect, useState } from "react";
import List from "./components/List";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const request = await fetch(
          "https://fetch-hiring.s3.amazonaws.com/hiring.json"
        );
        const items = await request.json();
        const lists = {};

        items.forEach((item) => {
          if (!lists[item.listId]) {
            lists[item.listId] = [];
          }

          lists[item.listId].push({
            id: item.id,
            listId: item.listId,
            name: item.name,
          });
        });

        setData(lists);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="App">
      {Object.keys(data)
        .sort()
        .map((listId, index) => {
          return <List key={index} listData={data[listId]} listId={listId} />;
        })}
    </div>
  );
}

export default App;
