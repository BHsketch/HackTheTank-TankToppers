import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import Graph from "./components/graph/graph.component";

import "reactflow/dist/style.css";

export default function App() {
  const [labelList, setLabelList] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((albums) => setLabelList(albums));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <Graph dataFromDB={labelList} />
    </div>
  );
}
