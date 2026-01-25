import { useState } from "react";
import stickyNoteImg from "./assets/image.png";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() && !details.trim()) return;
    setNotes([...notes, { title, details }]);
    setTitle("");
    setDetails("");
  };
  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };
  return (
    <div className="h-screen lg:flex bg-gray-900 text-white">
      <form onSubmit={handleAdd} className="lg:w-1/2 p-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-4 text-white">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full px-4 py-3 rounded border-2 border-gray-400 outline-none text-white text-lg font-medium placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write Details here"
          className="w-full h-36 px-4 py-3 rounded border-2 border-gray-400 outline-none text-white text-lg font-medium placeholder-gray-400 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold text-lg active:scale-95 transition"
        >
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 p-10 border-l-2 border-gray-700">
        <h1 className="text-4xl font-bold mb-4 text-white">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-6 h-[90%] overflow-y-auto">
          {notes.map((note, index) => (
            <div
              key={index}
              className="h-56 w-48 flex flex-col justify-between rounded-xl p-4 text-black shadow-lg relative"
            >
              <img
                src={stickyNoteImg}
                alt="Sticky Note"
                className="absolute inset-0 w-full h-full object-cover rounded-xl pointer-events-none"
              />
              <div className="absolute inset-0 bg-white/60 rounded-xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg leading-tight text-gray-900 break-words">
                  {note.title || "No Title"}
                </h3>
                <p className="text-sm mt-2 text-gray-800 leading-snug break-words">
                  {note.details || "No Details"}
                </p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="relative z-10 bg-red-600 hover:bg-red-700 text-white text-xs py-1 rounded font-bold active:scale-95 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
