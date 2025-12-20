import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

function rtNote(props) {
  return (
    <div className="rtalert rtalert__note">
      <div className="rtalert__heading">
        <svg
          className="rtalert-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4418_9823)">
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="#172554"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V13"
              stroke="#172554"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9945 16H12.0035"
              stroke="#172554"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_4418_9823">
              <rect width="24" height="24" fill="none" />
            </clipPath>
          </defs>
        </svg>
        <h4 className="rtalert-title">{props.title}</h4>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

function rtError(props) {
  return (
    <div className="rtalert rtalert__error">
      <div className="rtalert__heading">
        <svg
          className="rtalert-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <g clipPath="url(#clip0_4418_9796)">
            <path
              d="M12 7.75V13"
              stroke="#450a0a"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.08 8.58003V15.42C21.08 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.08 7.45003 21.08 8.58003Z"
              stroke="#450a0a"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16.1992V16.2992"
              stroke="#450a0a"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_4418_9796">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h4 className="rtalert-title">{props.title}</h4>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  rtnote: rtNote,
  rterror: rtError,
};

export default AdmonitionTypes;
