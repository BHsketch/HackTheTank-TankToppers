import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";

const commonStyles = {
  border: "1px solid #777",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  height: "75px",
  width: "75px",
};

const customEdgeStyles = {
  strokeWidth: 2,
  stroke: "#FF0072",
};

const initialNodes = [
  {
    id: "1",
    position: { x: 25, y: 300 },
    data: { label: "Login Page 100%" },
    style: {
      ...commonStyles,
    },
    type: "input",
    sourcePosition: "right",
  },
  {
    id: "2",
    position: { x: 300, y: 300 },
    data: { label: `Home Page 99%` },
    type: "default",
    targetPosition: "left",
    style: {
      ...commonStyles,
    },
    sourcePosition: "right",
  },
  {
    id: "3",
    position: { x: 500, y: 100 },
    data: { label: `Contact Us 8%` },
    type: "default",
    targetPosition: "left",
    style: {
      ...commonStyles,
    },
    sourcePosition: "right",
  },
  {
    id: "4",
    position: { x: 500, y: 300 },
    data: { label: `Scholarships 89%` },
    type: "default",
    targetPosition: "left",
    sourcePosition: "right",
    style: {
      ...commonStyles,
    },
  },
  {
    id: "5",
    position: { x: 500, y: 500 },
    data: { label: `About us 2%` },
    type: "default",
    targetPosition: "left",
    style: {
      ...commonStyles,
    },
    sourcePosition: "right",
  },
  {
    id: "p",
    type: "group",
    // type:"output"
    data: { label: null },
    position: { x: 700, y: 50 },
    style: {
      width: 700,
      height: 600,
    },
    targetPosition: "left",
  },
  {
    id: "6",
    data: { label: "Total Views of Scholarship(100%)" },
    position: { x: 10, y: 250 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    targetPosition: "left",
    style: {
      ...commonStyles,
      height: "100px",
      width: "100px",
    },
    sourcePosition: "right",
  },
  {
    id: "7",
    data: { label: "Bookmarked" },
    position: { x: 150, y: 50 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    // draggable: false,
    style: {
      ...commonStyles,
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "8",
    data: { label: "Applied" },
    position: { x: 150, y: 200 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    draggable: false,
    style: {
      ...commonStyles,
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "9",
    data: { label: "Terms & Conditions Inquiry" },
    position: { x: 150, y: 350 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    draggable: false,
    style: {
      ...commonStyles,
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "10",
    data: { label: "Not eligible for scholarship" },
    position: { x: 150, y: 500 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    draggable: false,
    style: {
      ...commonStyles,
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "11",
    data: { label: "Saved incomplete application" },
    position: { x: 350, y: 100 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    draggable: false,
    style: {
      ...commonStyles,
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "12",
    data: { label: "Submitted application" },
    position: { x: 350, y: 300 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    // draggable: false,
    style: {
      ...commonStyles,
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "13",
    data: { label: "Failed Document Verification" },
    position: { x: 500, y: 200 },
    parentNode: "p",
    extent: "parent",
    // draggable: false,
    type: "default",
    style: {
      ...commonStyles,
      backgroundColor: "red",
      color: "white",
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "14",
    data: { label: "Successfully Applied" },
    position: { x: 500, y: 400 },
    parentNode: "p",
    extent: "parent",
    type: "default",
    // draggable: false,
    style: {
      ...commonStyles,
      backgroundColor: "green",
      color: "white",
    },
    targetPosition: "left",
    sourcePosition: "right",
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e6-8",
    source: "6",
    target: "8",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e6-9",
    source: "6",
    target: "9",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e6-10",
    source: "6",
    target: "10",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e8-11",
    source: "8",
    target: "11",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e8-12",
    source: "8",
    target: "12",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e12-13",
    source: "12",
    target: "13",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e12-14",
    source: "12",
    target: "14",
    style: {
      ...customEdgeStyles,
    },
  },
  {
    id: "e",
    source: "4",
    target: "6",
    // animated: "true",
    label: "Scholarship 1",
    style: {
      ...customEdgeStyles,
    },
  },
  // { id: "e13-parent", source: "13", target: "parent" },
];

const rfStyle = {
  backgroundColor: "#D0C0F7",
};

export default function Graph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
