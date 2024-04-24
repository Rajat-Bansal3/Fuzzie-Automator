"use client";

import { EditorActions, EditorNodeType } from "@/lib/types";
import {
  Dispatch,
  useContext,
  createContext,
  useReducer,
} from "react";

export type EditorNode = EditorNodeType;

export type Editor = {
  elements: EditorNode[];
  Edeges: {
    id: string;
    source: string;
    target: string;
  }[];
  selectedNode: EditorNodeType;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};
export type EditorState = {
  Editor: Editor;
  History: HistoryState;
};

const initialEditorState: EditorState["Editor"] = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: "",
      metadata: {},
      title: "",
      type: "Trigger",
    },
    id: "e8712ehywje98jdsakmdoi",
    type: "Trigger",
    position: {
      x: 0,
      y: 0,
    },
  },
  Edeges: [],
};

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

const initialState: EditorState = {
  Editor: initialEditorState,
  History: initialHistoryState,
};
const EditorReducer = (
  state: EditorState = initialState,
  action: EditorActions
): EditorState => {
  switch (action.type) {
    case "REDO":
      if (state.History.currentIndex < state.History.history.length - 1) {
        const nextIndex = state.History.currentIndex + 1;
        const nextEditorState = { ...state.History.history[nextIndex] };
        const redoState = {
          ...state,
          editor: nextEditorState,
          history: {
            ...state.History,
            currentIndex: nextIndex,
          },
        };
        return redoState;
      }
      return state;
    case "UNDO":
      if (state.History.currentIndex > 0) {
        const prevIndex = state.History.currentIndex - 1;
        const prevEditorState = { ...state.History.history[prevIndex] };
        const undoState = {
          ...state,
          editor: prevEditorState,
          history: {
            ...state.History,
            currentIndex: prevIndex,
          },
        };
        return undoState;
      }
      return state;
    case "LOAD_DATA":
      return {
        ...state,
        Editor: {
          ...state.Editor,
          elements: action.payload.elements || initialEditorState.elements,
          Edeges: action.payload.edges,
        },
      };
    case "SELECTED_ELEMENT":
      return {
        ...state,
        Editor: {
          ...state.Editor,
          selectedNode: action.payload.elements,
        },
      };
    default:
      return state;
  }
};

export type EditorContextData = {
  previewMode: Boolean;
  setPreviewMode: (previewMode: Boolean) => void;
};
export const EditorContext = createContext<{
  state: EditorState;
  dispatch: Dispatch<EditorActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

type EditorProps = {
  children: React.ReactNode;
};

const EditorProvider = ({ children }: EditorProps) => {
  const [state, dispatch] = useReducer(EditorReducer, initialState);
  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};
export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor hook must be used in Conetxt under provider");
  }
  return context;
};
export default EditorProvider;
