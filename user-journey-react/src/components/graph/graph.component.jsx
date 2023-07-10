import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";
import { initialNodes } from "./nodes-edges-data/initialNodes";
import { initialEdges } from "./nodes-edges-data/initialEdges";
import { rfStyle } from "./nodes-edges-data/customStyles";


export default function Graph(props) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   console.log(props);
//   //   const receivedArr = datum;
//   useEffect(() => {
//     setNodes((nds) => {
//       for (let i = 0; i < nds.length; i++) {
//         const node = nds[i];
//         console.log(receivedArr);
//         const id = receivedArr[i].id;
//         const title = receivedArr[i].title;
//         if (node.id === id) {
//           node.data = {
//             ...node.data,
//             label: title,
//           };
//         }
//         return node;
//       }
//     });
//   }, [receivedArr]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={rfStyle}
      />
    </div>
  );
}
