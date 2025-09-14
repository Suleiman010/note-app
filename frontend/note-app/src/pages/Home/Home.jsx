import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Hero"
            date="09/08/2025"
            content="Meeting on 7th of Aprl"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center cursor-pointer rounded-2xl bg-green-500 hover:bg-green-600 transition-colors absolute right-10 bottom-10"
        onClick={() => {}}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <AddEditNotes />
    </>
  );
};

export default Home;
