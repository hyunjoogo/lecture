import React, { useRef, useState } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = e => {
    const { value, name } = e.target; // e.target의 태그의 name attribute를 가지고 오는 것
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log([name]);
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {setInputs} </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
