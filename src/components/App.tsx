import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  
  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
        <BackgroundHeading />
        
        <main className="relative w-full max-w-[65rem] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08) grid grid-cols-[7fr_4fr] grid-rows-[auto_1fr] overflow-hidden h-auto md:h-[40rem] ">
          <Header />

          <TodoList />

          <Sidebar />
        </main>

        <Footer />       
    </div>
  )
}

export default App
