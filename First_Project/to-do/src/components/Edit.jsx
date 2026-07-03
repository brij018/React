import todo from "../maintodo.module.css";

const Edit = ({ editInput, saveTask, setEditInput }) => {
  return (
    <>
      {editInput && (
        <form onSubmit={saveTask}>
          <input
            type="text"
            value={editInput.task}
            onChange={(e) => {
              setEditInput({ ...editInput, task: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            value={editInput.description}
            onChange={(e) => {
              setEditInput({ ...editInput, description: e.target.value });
            }}
          />
          <br />
          <br />
          <button type="submit">Save</button>
        </form>
      )}
    </>
  );
};

export default Edit;
