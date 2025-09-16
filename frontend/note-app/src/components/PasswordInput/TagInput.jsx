import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addNewTags = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTags();
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div>
      {tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-green-900  bg-slate-100 px-3 py-1 "
            >
              #{tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose className="text-red-400" />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border px-3 py-2 outline-none rounded-sm border-gray-100"
          placeholder="Add Tags"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex items-center justify-center rounded border border-green-700  hover:bg-green-600 transition-all"
          onClick={() => addNewTags()}
        >
          <MdAdd className="text-2xl text-green-600  hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
