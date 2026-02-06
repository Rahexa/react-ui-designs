import React, { useState, useEffect } from "react";
import { Plus, Trash2, CheckCircle, Circle, Layout, Search, Sparkles, Zap, Filter } from "lucide-react";

function App() {
  // --- 1. STATE MANAGEMENT ---
  // We use state to keep track of data that changes. 
  // 'tasks' is our data, 'setTasks' is the only way we are allowed to update it.
  const [task, setTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState(() => {
    // --- 2. SIDE EFFECTS (LIFECYCLE) ---
    // Initialization: Check if we have saved data in the browser
    const saved = localStorage.getItem("react_study_tasks");
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Learn React Hooks", completed: true },
      { id: 2, text: "Build a landing page", completed: false }
    ];
  });

  // This Effect runs every time [tasks] changes, saving it to LocalStorage
  useEffect(() => {
    localStorage.setItem("react_study_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // --- 3. EVENT HANDLING ---
  const addTask = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submit
    if (task.trim()) {
      const newTask = {
        id: Date.now(), // Using timestamp as a unique ID (React best practice)
        text: task,
        completed: false
      };
      setTasks([newTask, ...tasks]); // Spread operator: "Keep old tasks, add the new one at the start"
      setTask(""); // Clear the input field
    }
  };

  const toggleTask = (id) => {
    // Immutability: We create a NEW array instead of modifying the old one
    const updated = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    setTasks(updated);
  };

  const deleteTask = (id) => {
    // Filter: "Keep everything EXCEPT the one with this ID"
    setTasks(tasks.filter(t => t.id !== id));
  };

  // --- 4. DERIVED STATE (LOGIC) ---
  // We don't need a separate state for 'filteredTasks'. We calculate it during render.
  const filteredTasks = tasks.filter(t => 
    t.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* --- FIXED NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg text-white shadow-lg shadow-indigo-200">
              <Layout size={18} />
            </div>
            <span className="font-bold text-lg tracking-tight">ReactFlow</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <span className="cursor-pointer hover:text-indigo-600">State</span>
            <span className="cursor-pointer hover:text-indigo-600">Props</span>
            <span className="cursor-pointer hover:text-indigo-600">Hooks</span>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold">
            Sign Up
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Educational Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">
            <Zap size={14} fill="currentColor" /> BEGINNER FRIENDLY
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Learn React by <br />
            <span className="text-indigo-600 italic">doing, not watching.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            This app demonstrates <strong>State</strong>, <strong>Effects</strong>, and <strong>Array Methods</strong> in a real-world SaaS layout.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-bold shadow-xl shadow-indigo-100 hover:scale-105 transition-transform">
              Explore Code
            </button>
          </div>
        </div>

        {/* Right Side: The Interactive Component */}
        <div className="relative">
          <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-3xl" />
          
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden max-w-[480px] mx-auto lg:ml-auto">
            {/* Search Bar (Derived State Example) */}
            <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-3">
              <Search size={14} className="text-slate-400" />
              <input 
                type="text"
                placeholder="Search your tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs w-full focus:outline-none"
              />
            </div>

            <div className="p-6">
              {/* Form Handling */}
              <form onSubmit={addTask} className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={task} // --- CONTROLLED COMPONENT ---
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="What's next?"
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                />
                <button type="submit" className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition">
                  <Plus size={20} />
                </button>
              </form>

              {/* --- 5. CONDITIONAL RENDERING --- */}
              <div className="space-y-2 min-h-[200px]">
                {filteredTasks.length === 0 ? (
                  <div className="text-center py-10 opacity-40">
                    <Filter className="mx-auto mb-2" size={24} />
                    <p className="text-xs font-medium">No tasks found</p>
                  </div>
                ) : (
                  // --- 6. LISTS & KEYS ---
                  filteredTasks.map((t) => (
                    <div 
                      key={t.id} 
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                        t.completed ? "bg-slate-50 border-transparent" : "bg-white border-slate-100 hover:border-indigo-100 shadow-sm"
                      }`}
                    >
                      <button onClick={() => toggleTask(t.id)}>
                        {t.completed ? <CheckCircle className="text-emerald-500" size={18} /> : <Circle className="text-slate-300" size={18} />}
                      </button>
                      <span className={`flex-grow text-xs font-bold ${t.completed ? "line-through text-slate-400" : "text-slate-700"}`}>
                        {t.text}
                      </span>
                      <button onClick={() => deleteTask(t.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Progress Footer */}
            <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-500 h-full transition-all duration-500" 
                    style={{ width: `${tasks.length ? (tasks.filter(t => t.completed).length / tasks.length) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400">
                  {tasks.filter(t => t.completed).length}/{tasks.length} Done
                </span>
              </div>
              <span className="text-[10px] font-bold text-indigo-400 flex items-center gap-1">
                <Sparkles size={10} /> Syncing Live
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section to clear concepts */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Concepts Used</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-indigo-600 mb-2">1. useState</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Used to store the list of tasks and the text currently inside the input field. When state changes, React automatically re-renders the UI.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-indigo-600 mb-2">2. Array.map()</h3>
              <p className="text-sm text-slate-500 leading-relaxed">This is how we transform your data array into a list of HTML elements. Every item needs a unique "key" prop.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;