import { EditorCardCanvasType } from "./types";

export const onDragStart = (e:any , nodeType : EditorCardCanvasType["type"]) =>{
    e.dataTransfer.setData('application/reactFlow' ,nodeType)
    e.dataTransfer.effectAllowed = 'move'
}