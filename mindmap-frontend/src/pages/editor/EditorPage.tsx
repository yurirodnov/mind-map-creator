import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "../../components/editor-components/editor-wrapper/EditorWrapper";

export const EditorPage = () => {
  return (
    <div>
      <ReactFlowProvider>
        <div className="flow-container">
          <Flow />
        </div>
      </ReactFlowProvider>
    </div>
  );
};
