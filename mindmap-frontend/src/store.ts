import type { Edge, EdgeChange, Node, NodeChange, OnNodesChange, OnEdgesChange } from "@xyflow/react";
import { applyNodeChanges, applyEdgeChanges } from "@xyflow/react";
import { createWithEqualityFn } from "zustand/traditional";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
};

const useStore = createWithEqualityFn<RFState>((set, get) => ({
  nodes: [
    {
      id: "root",
      type: "default",
      data: { label: "Root Node" },
      position: { x: 0, y: 0 },
    },
    {
      id: "0",
      type: "default",
      data: { label: "Node 0" },
      position: { x: 100, y: 100 },
    },
  ],
  edges: [{ id: "root-0", source: "root", target: "0" }],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
}));

export default useStore;
