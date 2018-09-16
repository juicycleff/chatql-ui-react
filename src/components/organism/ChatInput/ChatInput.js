import React from "react";
import PropTypes from "prop-types";
import Input from "../../atom/Input/Input";

const ChatInput = (props) => {
  const { placeholder } = props;
  return (
    <Input placeholder={placeholder || "Type a message"} />
  );
};

ChatInput.propTypes = {
  placeholder: PropTypes.string,
  onSend: PropTypes.func,
  onRecord: PropTypes.func,
};

export default ChatInput;
