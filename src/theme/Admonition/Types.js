import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

function rtNote(props) {
  return (
    <div className="rtalert rtalert__rtnote">
      <img className="rtalert__icon" src="../icons/iconinfo.svg" />
      <h5 className="rtalert__title">{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  rtnote: rtNote,
};

export default AdmonitionTypes;
