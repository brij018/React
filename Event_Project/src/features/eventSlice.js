import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  click: 0,
  doubleClick: 0,
  contextMenu: null,
  change: "",
  input: "",
  submit: null,
  focus: 0,
  blur: 0,
  keyDown: "",
  keyUp: "",
  keyPress: "",
  mouseEnter: 0,
  mouseLeave: 0,
  mouseDown: "",
  mouseUp: "",
  mouseMove: null,
  scroll: 0,
  copy: 0,
  cut: 0,
  paste: "",
  dragStart: 0,
  dragOver: 0,
  drop: "",
  dragEnd: 0,
  touchStart: 0,
  touchEnd: 0,
  touchMove: null,
  wheel: 0,
  select: "",
  load: false,
  error: false,
  resize: null,
};

const eventSlice = createSlice({
  name: "Events",
  initialState,
  reducers: {
    click: (state) => {
      state.click += 1;
    },
    doubleClick: (state) => {
      state.doubleClick += 1;
    },
    contextMenu: (state, action) => {
      state.contextMenu = { x: action.payload.x, y: action.payload.y };
    },
    change: (state, action) => {
      state.change = action.payload;
    },
    input: (state, action) => {
      state.input = action.payload;
    },
    submit: (state, action) => {
      state.submit = action.payload;
    },
    focus: (state) => {
      state.focus += 1;
    },
    blur: (state) => {
      state.blur += 1;
    },
    keyDown: (state, action) => {
      state.keyDown = action.payload;
    },
    keyUp: (state, action) => {
      state.keyUp = action.payload;
    },
    keyPress: (state, action) => {
      state.keyPress = action.payload;
    },
    mouseEnter: (state) => {
      state.mouseEnter += 1;
    },
    mouseLeave: (state) => {
      state.mouseLeave += 1;
    },
    mouseDown: (state, action) => {
      state.mouseDown = action.payload;
    },
    mouseUp: (state, action) => {
      state.mouseUp = action.payload;
    },
    mouseMove: (state, action) => {
      state.mouseMove = { x: action.payload.x, y: action.payload.y };
    },
    scroll: (state, action) => {
      state.scroll = action.payload;
    },
    copy: (state) => {
      state.copy += 1;
    },
    cut: (state) => {
      state.cut += 1;
    },
    paste: (state, action) => {
      state.paste = action.payload;
    },
    dragStart: (state) => {
      state.dragStart += 1;
    },
    dragOver: (state) => {
      state.dragOver += 1;
    },
    drop: (state, action) => {
      state.drop = action.payload;
    },
    dragEnd: (state) => {
      state.dragEnd += 1;
    },
    touchStart: (state) => {
      state.touchStart += 1;
    },
    touchEnd: (state) => {
      state.touchEnd += 1;
    },
    touchMove: (state, action) => {
      state.touchMove = {
        x: action.payload.x,
        y: action.payload.y,
      };
    },
    wheel: (state, action) => {
      state.wheel = action.payload;
    },
    select: (state, action) => {
      state.select = action.payload;
    },
    load: (state) => {
      state.load = true;
    },
    error: (state) => {
      state.error = true;
    },
    resize: (state, action) => {
      state.resize = {
        width: action.payload.width,
        height: action.payload.height,
      };
    },
  },
});

export const {
  click,
  doubleClick,
  contextMenu,
  change,
  input,
  submit,
  focus,
  blur,
  keyDown,
  keyUp,
  keyPress,
  mouseEnter,
  mouseLeave,
  mouseDown,
  mouseUp,
  mouseMove,
  scroll,
  copy,
  cut,
  paste,
  dragStart,
  dragOver,
  drop,
  dragEnd,
  touchStart,
  touchEnd,
  touchMove,
  wheel,
  select,
  load,
  error,
  resize,
} = eventSlice.actions;

export default eventSlice.reducer;
