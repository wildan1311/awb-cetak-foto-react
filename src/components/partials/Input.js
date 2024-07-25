function Input({ type, name, id = "", className = "", handleChange}) {
  function handleChangeInput(event){
    handleChange(event.target.value);
  }

  return (
    <input
      type={type}
      name={name}
      id={id}
      className="flex border-2 border-[#dcf2f3] w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      onChange={handleChangeInput}
      defaultValue={1}
    ></input>
  );
}

export default Input;
