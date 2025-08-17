import { useState, useEffect } from "react";
import clsx from "clsx";
import Header from "../components/Header";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

export default function UserDetailsSection() {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-changed", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  // NOTE: In your theme toggle logic (e.g., in Header), after updating localStorage, add:
  // window.dispatchEvent(new Event("themeChanged"));
  // Remove a blog (same logic as webinars)
  const handleRemoveBlog = (idx) => {
    const newBlogs = blogs.filter((_, i) => i !== idx);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
    setEditIdx(null);
  };

  // Start editing a blog (same logic as webinars)
  const handleEditBlog = (idx) => {
    setEditIdx(idx);
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
  };

  // Save edited blog (same logic as webinars)
  const handleBlogEditSave = (idx) => {
    if (!editForm.title || !editForm.image || !editForm.author || !editForm.description) return;
    const newBlogs = blogs.map((b, i) => i === idx ? { ...editForm, createdAt: b.createdAt } : b);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setEditIdx(null);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', date: '', time: '', description: '' });
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarForm, setWebinarForm] = useState({ title: '', date: '', time: '', description: '' });

  const [signupDetails, setSignupDetails] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: '', image: '', author: '', description: '' });

  // Prepare data for signup graph (signups per day)
  const signupDateCounts = signupDetails.reduce((acc, user) => {
    if (user.signupDate) {
      acc[user.signupDate] = (acc[user.signupDate] || 0) + 1;
    }
    return acc;
  }, {});
  const signupGraphData = Object.entries(signupDateCounts).map(([date, count]) => ({ date, count }));

  // Prepare data for instructor graph (instructors per expertise)
  const expertiseCounts = instructorDetails.reduce((acc, inst) => {
    if (inst.expertise) {
      acc[inst.expertise] = (acc[inst.expertise] || 0) + 1;
    }
    return acc;
  }, {});
  const instructorGraphData = Object.entries(expertiseCounts).map(([expertise, count]) => ({ expertise, count }));

  useEffect(() => {
    // Fetch all admin data from localStorage
    const fetchDetails = () => {
      const storedUsers = localStorage.getItem("users");
      setSignupDetails(storedUsers ? JSON.parse(storedUsers) : []);
      const storedInstructors = localStorage.getItem("instructors");
      setInstructorDetails(storedInstructors ? JSON.parse(storedInstructors) : []);
      const storedWebinars = localStorage.getItem("webinars");
      setWebinars(storedWebinars ? JSON.parse(storedWebinars) : []);
      const storedRegistrations = localStorage.getItem("webinarRegistrations");
      setWebinarRegistrations(storedRegistrations ? JSON.parse(storedRegistrations) : []);
      const storedBlogs = localStorage.getItem("blogs");
      setBlogs(storedBlogs ? JSON.parse(storedBlogs) : []);
    };
    fetchDetails();
    window.addEventListener("storage", fetchDetails);
    return () => window.removeEventListener("storage", fetchDetails);
  }, []);

  // After adding/removing a blog, always sync with localStorage
  const syncBlogs = () => {
    const storedBlogs = localStorage.getItem("blogs");
    setBlogs(storedBlogs ? JSON.parse(storedBlogs) : []);
  };

  // After adding/removing a webinar, always sync with localStorage
  const syncWebinars = () => {
    const storedWebinars = localStorage.getItem("webinars");
    setWebinars(storedWebinars ? JSON.parse(storedWebinars) : []);
  };

  // Handle form input changes
  const handleWebinarInput = (e) => {
    const { name, value } = e.target;
    setWebinarForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleWebinarSubmit = (e) => {
    e.preventDefault();
    if (!webinarForm.title || !webinarForm.date || !webinarForm.time || !webinarForm.description) return;
    const newWebinars = [...webinars, { ...webinarForm }];
    localStorage.setItem("webinars", JSON.stringify(newWebinars));
    syncWebinars();
    setWebinarForm({ title: '', date: '', time: '', description: '' });
  };

  // Remove a webinar
  const handleRemoveWebinar = (idx) => {
    const newWebinars = webinars.filter((_, i) => i !== idx);
    localStorage.setItem("webinars", JSON.stringify(newWebinars));
    syncWebinars();
  };

  // Start editing a webinar
  const handleEditWebinar = (idx) => {
    setEditIdx(idx);
  const [editForm, setEditForm] = useState({ title: '', image: '', author: '', description: '' });
  };

  // Handle edit form input
  const handleEditInput = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };


  // Save edited webinar
  const handleEditSave = (idx) => {
    if (!editForm.title || !editForm.date || !editForm.time || !editForm.description) return;
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
    setWebinars(newWebinars);
    localStorage.setItem("webinars", JSON.stringify(newWebinars));
    setEditIdx(null);
  };

  // Handle blog form input
  const handleBlogInput = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle blog form submit
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.image || !blogForm.author || !blogForm.description) return;
    const newBlogs = [{ ...blogForm, createdAt: new Date().toISOString() }, ...blogs];
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    syncBlogs();
    setBlogForm({ title: '', image: '', author: '', description: '' });
  };

  // Cancel editing
  const handleEditCancel = () => {
    setEditIdx(null);
  };

  return (
    <div className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]"
    )}>
      <Header />

      {/* User Signup Table Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-16",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#00bfff]"
        )}>User Signup Details</h2>
        {signupDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className={clsx(
              "min-w-full border rounded-lg",
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            )}>
              <thead className={clsx(
                "text-white",
                theme === "dark" ? "bg-[#005f8f]" : "bg-[#00bfff]"
              )}>
                <tr>
                  <th className="px-4 py-2 text-center">S.No</th>
                  <th className="px-4 py-2 text-center">First Name</th>
                  <th className="px-4 py-2 text-center">Last Name</th>
                  <th className="px-4 py-2 text-center">Email</th>
                  <th className="px-4 py-2 text-center">Phone</th>
                  <th className="px-4 py-2 text-center">Signup Time</th>
                  <th className="px-4 py-2 text-center">Signup Date</th>
                </tr>
              </thead>
              <tbody>
                {signupDetails.map((user, idx) => (
                  <tr key={user.email || idx} className={clsx("border-b", theme === "dark" ? "border-[#005f8f]" : "border-[#00bfff]") }>
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{user.firstName}</td>
                    <td className="px-4 py-2 text-center">{user.lastName}</td>
                    <td className="px-4 py-2 text-center">{user.email}</td>
                    <td className="px-4 py-2 text-center">{user.phone}</td>
                    <td className="px-4 py-2 text-center">{user.signupTime}</td>
                    <td className="px-4 py-2 text-center">{user.signupDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>No user signup details found.</p>
        )}
      </div>

      {/* Instructor Details Table Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-6",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#00bfff]"
        )}>Instructor Details</h2>
        {instructorDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className={clsx(
              "min-w-full border rounded-lg",
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            )}>
              <thead className={clsx(
                "text-white",
                theme === "dark" ? "bg-[#005f8f]" : "bg-[#00bfff]"
              )}>
                <tr>
                  <th className="px-4 py-2 text-center">S.No</th>
                  <th className="px-4 py-2 text-center">Name</th>
                  <th className="px-4 py-2 text-center">Email</th>
                  <th className="px-4 py-2 text-center">Expertise</th>
                </tr>
              </thead>
              <tbody>
                {instructorDetails.map((inst, idx) => (
                  <tr key={inst.email || idx} className={clsx("border-b", theme === "dark" ? "border-[#005f8f]" : "border-[#00bfff]") }>
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{inst.name}</td>
                    <td className="px-4 py-2 text-center">{inst.email}</td>
                    <td className="px-4 py-2 text-center">{inst.expertise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>No instructor details found.</p>
        )}
      </div>

      {/* Dashboard Graphs */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-6",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-8 text-center",
          "text-[#00bfff]"
        )}>Dashboard Graphs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={clsx(
              "text-lg font-semibold mb-4 text-center",
              "text-[#00bfff]"
            )}>Signups Per Day</h3>
            {signupGraphData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={signupGraphData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="date" stroke={theme === "dark" ? "#fff" : "#22223b"} />
                  <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
                  <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} />
                  <Bar dataKey="count" fill="#00bfff" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>No signup data for graph.</p>
            )}
          </div>
          <div>
            <h3 className={clsx(
              "text-lg font-semibold mb-4 text-center",
              "text-[#00bfff]"
            )}>Instructors Per Expertise</h3>
            {instructorGraphData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={instructorGraphData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
                  <XAxis dataKey="expertise" stroke={theme === "dark" ? "#fff" : "#22223b"} />
                  <YAxis allowDecimals={false} stroke={theme === "dark" ? "#fff" : "#22223b"} />
                  <Tooltip contentStyle={{ background: theme === "dark" ? "#181f2a" : "#fff", color: theme === "dark" ? "#fff" : "#22223b" }} />
                  <Bar dataKey="count" fill="#00bfff" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>No instructor data for graph.</p>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Webinar Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-8",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#00bfff]"
        )}>Upcoming Webinar</h2>
        <form className="mb-6 w-full" onSubmit={handleWebinarSubmit}>
          <div className="flex flex-row gap-4 mb-4 w-full">
            <input
              type="text"
              name="title"
              value={webinarForm.title}
              onChange={handleWebinarInput}
              placeholder="Webinar Title"
              className={clsx(
                "border rounded px-4 py-3 text-lg w-2/4 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
            <input
              type="date"
              name="date"
              value={webinarForm.date}
              onChange={handleWebinarInput}
              className={clsx(
                "border rounded px-4 py-3 text-lg w-1/4 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
            <input
              type="time"
              name="time"
              value={webinarForm.time}
              onChange={handleWebinarInput}
              className={clsx(
                "border rounded px-4 py-3 text-lg w-1/4 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              value={webinarForm.description}
              onChange={handleWebinarInput}
              placeholder="Description"
              className={clsx(
                "border rounded px-4 py-3 text-lg w-full",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={clsx(
              "rounded px-5 py-2 text-base font-semibold transition",
              "bg-[#00bfff] text-white hover:bg-[#0099cc]"
            )}>Add Webinar</button>
          </div>
        </form>
        <div>
          {webinars.length > 0 ? (
            <ul className="space-y-2">
              {webinars.map((webinar, idx) => (
                <li key={idx} className={clsx(
                  "border rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2",
                  theme === "dark" ? "border-gray-700 bg-[#232b3b]" : "border-gray-200 bg-white"
                )}>
                  {editIdx === idx ? (
                    <form className="flex flex-col md:flex-row md:items-center gap-2 w-full" onSubmit={e => { e.preventDefault(); handleEditSave(idx); }}>
                      <input
                        type="text"
                        name="title"
                        value={editForm.title}
                        onChange={handleEditInput}
                        className={clsx(
                          "border rounded px-2 py-1 md:w-32 w-full",
                          theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                        )}
                        required
                      />
                      <input
                        type="date"
                        name="date"
                        value={editForm.date}
                        onChange={handleEditInput}
                        className={clsx(
                          "border rounded px-2 py-1 md:w-32 w-full",
                          theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                        )}
                        required
                      />
                      <input
                        type="time"
                        name="time"
                        value={editForm.time}
                        onChange={handleEditInput}
                        className={clsx(
                          "border rounded px-2 py-1 md:w-24 w-full",
                          theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                        )}
                        required
                      />
                      <input
                        type="text"
                        name="description"
                        value={editForm.description}
                        onChange={handleEditInput}
                        className={clsx(
                          "border rounded px-2 py-1 md:flex-1 w-full",
                          theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                        )}
                        required
                      />
                      <button type="submit" className={clsx(
                        "rounded px-3 py-1 font-semibold transition",
                        "bg-[#00bfff] text-white hover:bg-[#0099cc]"
                      )}>Save</button>
                      <button type="button" className={clsx(
                        "rounded px-3 py-1 font-semibold transition",
                        theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-300 text-black hover:bg-gray-400"
                      )} onClick={handleEditCancel}>Cancel</button>
                    </form>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                      <div>
                        <span className="font-semibold">{webinar.title}</span> <span className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>({webinar.date} {webinar.time})</span>
                        <div className={clsx(theme === "dark" ? "text-gray-300" : "text-gray-700", "text-sm mt-1")}>{webinar.description}</div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button className={clsx(
                          "rounded px-3 py-1 font-semibold transition",
                          theme === "dark" ? "bg-yellow-500 text-white hover:bg-yellow-400" : "bg-yellow-400 text-white hover:bg-yellow-500"
                        )} onClick={() => handleEditWebinar(idx)}>Edit</button>
                        <button className={clsx(
                          "rounded px-3 py-1 font-semibold transition",
                          theme === "dark" ? "bg-red-600 text-white hover:bg-red-500" : "bg-red-500 text-white hover:bg-red-600"
                        )} onClick={() => handleRemoveWebinar(idx)}>Remove</button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>No upcoming webinars added.</p>
          )}
        </div>
      </div>

      {/* Webinar Registrations Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-8",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#00bfff]"
        )}>Webinar Registrations</h2>
        {webinarRegistrations.length > 0 ? (
          <div className="overflow-x-auto">
            <table className={clsx(
              "min-w-full border rounded-lg",
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            )}>
              <thead className="bg-[#00bfff] text-white">
                <tr>
                  <th className="px-4 py-2 text-center">S.No</th>
                  <th className="px-4 py-2 text-center">Webinar Title</th>
                  <th className="px-4 py-2 text-center">Date</th>
                  <th className="px-4 py-2 text-center">Name</th>
                  <th className="px-4 py-2 text-center">Email</th>
                  <th className="px-4 py-2 text-center">Registered At</th>
                </tr>
              </thead>
              <tbody>
                {webinarRegistrations.map((reg, idx) => (
                  <tr key={idx} className={clsx("border-b", theme === "dark" ? "border-gray-700" : "border-gray-200") }>
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{reg.webinarTitle}</td>
                    <td className="px-4 py-2 text-center">{reg.webinarDate}</td>
                    <td className="px-4 py-2 text-center">{reg.name}</td>
                    <td className="px-4 py-2 text-center">{reg.email}</td>
                    <td className="px-4 py-2 text-center">{new Date(reg.registeredAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-500")}>No webinar registrations found.</p>
        )}
      </div>

      {/* Add New Blog Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-8",
        theme === "dark" ? "bg-[#181f2a]" : "bg-white"
      )}>
        <h2 className={clsx(
          "text-2xl font-bold mb-4",
          "text-[#00bfff]"
        )}>Add New Blog</h2>
        <form className="mb-6 w-full" onSubmit={handleBlogSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="title"
              value={blogForm.title}
              onChange={handleBlogInput}
              placeholder="Blog Title"
              className={clsx(
                "border rounded px-4 py-3 text-lg flex-1 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
            <input
              type="text"
              name="image"
              value={blogForm.image}
              onChange={handleBlogInput}
              placeholder="Image URL"
              className={clsx(
                "border rounded px-4 py-3 text-lg flex-1 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="author"
              value={blogForm.author}
              onChange={handleBlogInput}
              placeholder="Author Name"
              className={clsx(
                "border rounded px-4 py-3 text-lg flex-1 min-w-0",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              value={blogForm.description}
              onChange={handleBlogInput}
              placeholder="Description"
              className={clsx(
                "border rounded px-4 py-3 text-lg w-full min-h-[80px]",
                theme === "dark" ? "bg-[#232b3b] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
              )}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={clsx(
              "rounded px-5 py-2 text-base font-semibold transition",
              "bg-[#00bfff] text-white hover:bg-[#0099cc]"
            )}>Add Blog</button>
          </div>
        </form>
        <div>
          {blogs.length > 0 ? (
            <ul className="space-y-4">
              {blogs.map((blog, idx) => (
                <li key={idx} className={clsx(
                  "border rounded p-4 flex flex-col md:flex-row md:items-center gap-4",
                  theme === "dark" ? "border-gray-700 bg-[#232b3b]" : "border-gray-200 bg-white"
                )}>
                  <img src={blog.image} alt={blog.title} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1">
                    {editIdx === idx ? (
                      <form className="flex flex-col gap-2" onSubmit={e => { e.preventDefault(); handleBlogEditSave(idx); }}>
                        <input
                          type="text"
                          name="title"
                          value={editForm.title}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <input
                          type="text"
                          name="image"
                          value={editForm.image}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <input
                          type="text"
                          name="author"
                          value={editForm.author}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <textarea
                          name="description"
                          value={editForm.description}
                          onChange={handleEditInput}
                          className={clsx(
                            "border rounded px-2 py-1",
                            theme === "dark" ? "bg-[#181f2a] text-white border-gray-700" : "bg-white text-[#22223b] border-gray-300"
                          )}
                          required
                        />
                        <div className="flex gap-2 mt-2">
                          <button type="submit" className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            "bg-[#00bfff] text-white hover:bg-[#0099cc]"
                          )}>Save</button>
                          <button type="button" className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-300 text-black hover:bg-gray-400"
                          )} onClick={handleEditCancel}>Cancel</button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <div className={clsx(
                          "font-bold text-lg",
                          "text-[#00bfff]"
                        )}>{blog.title}</div>
                        <div className={clsx(
                          "text-sm mb-1",
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        )}>By {blog.author}</div>
                        <div className={clsx(
                          "text-sm mb-1",
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        )}>{blog.description}</div>
                        <div className={clsx(
                          "text-xs",
                          "text-gray-400"
                        )}>{new Date(blog.createdAt).toLocaleString()}</div>
                        <div className="flex gap-2 mt-2">
                          <button className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            theme === "dark" ? "bg-yellow-500 text-white hover:bg-yellow-400" : "bg-yellow-400 text-white hover:bg-yellow-500"
                          )} onClick={() => handleEditBlog(idx)}>Edit</button>
                          <button className={clsx(
                            "rounded px-3 py-1 font-semibold transition",
                            theme === "dark" ? "bg-red-600 text-white hover:bg-red-500" : "bg-red-500 text-white hover:bg-red-600"
                          )} onClick={() => handleRemoveBlog(idx)}>Remove</button>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx("text-center", theme === "dark" ? "text-gray-400" : "text-gray-500")}>No blogs added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
