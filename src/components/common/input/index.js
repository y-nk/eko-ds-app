import React, {
  createRef, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = ({ value, onChange }) => {
  const [draft, setDraft] = useState(value);
  const [edit, setEdit] = useState(!value.length);

  const input = createRef();

  const confirm = useCallback(() => {
    onChange(draft);
    setEdit(false);
  }, [draft, onChange]);

  const cancel = (e) => {
    if (e) e.stopImmediatePropagation();

    setDraft(value);
    setEdit(false);
  };

  const onKey = (e) => {
    if (e.key === 'Enter') confirm();
    else if (e.key === 'Escape') cancel();
  };

  useEffect(() => {
    if (edit) input.current.focus();

    // cancel clicker
    if (edit) {
      window.addEventListener('click', confirm);
    } else {
      window.removeEventListener('click', confirm);
    }

    return () => window.removeEventListener('click', confirm);
  }, [confirm, edit, input]);

  return (
    <input
      ref={input}
      className="input"
      type="text"
      readOnly={!edit}
      onClick={() => setEdit(!edit)}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onKeyUp={onKey}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
