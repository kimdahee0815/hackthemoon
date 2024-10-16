// recenter.js
module.exports = ({ app }) => {
  const editor = app.workspace.activeEditor?.editor;
  if (!editor) return;
  editor.scrollIntoView(
    {
      from: editor.getCursor("from"),
      to: editor.getCursor("to"),
    },
    true
  );
};
