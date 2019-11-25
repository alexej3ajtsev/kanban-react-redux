export const initialState = {
  taskModal: {
    isVisible: false,
    columnId: null
  },
  draggedTask: {},
  columns: [
    {
      id: "backlog",
      title: "Backlog",
      tasks: [
        {
          priority: 0,
          id: "asdsad",
          terms: "",
          title: "#1 TASK TITLE "
        },
        {
          priority: 0,
          id: "task1-one",
          terms: "",
          title: "#2 TASK TITLE"
        }
      ]
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          priority: 0,
          id: "anther-task",
          terms: "",
          title: "Go to Kfc and eat more than one burgers"
        }
      ]
    }
  ]
};
