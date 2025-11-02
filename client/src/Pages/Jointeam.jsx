import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const JoinTeam = () => {
  const [form, setForm] = useState({
    teamName: "",
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    leader: "",
    maxMembers: "",
    requiredSkills: [],
    description: "",
    isOpen: true,
  });

  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() !== "") {
      setForm({
        ...form,
        requiredSkills: [...form.requiredSkills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skill) => {
    setForm({
      ...form,
      requiredSkills: form.requiredSkills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Team details submitted successfully!");
    console.log("Team Data:", form);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 🔵 Animated Split Background */}
      <div className="absolute inset-0 flex">
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 bg-[length:200%_200%]"
        />
        <motion.div
          initial={{ backgroundPosition: "100% 50%" }}
          animate={{ backgroundPosition: "0% 50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-[length:200%_200%]"
        />
      </div>

      {/* 🟡 Scrollable Card Section */}
      <div className="relative z-10 flex justify-center items-center h-full w-full px-4 py-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 my-10"
        >
          {/* ✨ Title */}
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-3xl font-extrabold text-center text-yellow-500 mb-2"
          >
            Join or Manage a Team
          </h1>
          <p className="text-gray-700 mb-6 italic text-center text-sm">
            Manage existing hackathon team details 🧑‍💻
          </p>

          {/* 🧾 Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Team Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Team Name
              </label>
              <Input
                name="teamName"
                value={form.teamName}
                onChange={handleChange}
                placeholder="Enter your team name"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                required
              />
            </div>

            {/* Hackathon Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Hackathon Name
              </label>
              <Input
                name="hackathonName"
                value={form.hackathonName}
                onChange={handleChange}
                placeholder="Enter hackathon name"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                required
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Start Date
                </label>
                <Input
                  type="date"
                  name="hackathonStartDate"
                  value={form.hackathonStartDate}
                  onChange={handleChange}
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  End Date
                </label>
                <Input
                  type="date"
                  name="hackathonEndDate"
                  value={form.hackathonEndDate}
                  onChange={handleChange}
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Max Members */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Max Members
              </label>
              <Input
                type="number"
                name="maxMembers"
                value={form.maxMembers}
                onChange={handleChange}
                placeholder="e.g. 5"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                required
              />
            </div>

            {/* Required Skills (Tag System like CreateTeam skills/interests) */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Required Skills
              </label>
              <div className="flex gap-2">
                <Input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add skill (e.g. React)"
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                />
                <Button
                  type="button"
                  onClick={handleSkillAdd}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl px-4"
                >
                  Add
                </Button>
              </div>

              {/* Display added skills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {form.requiredSkills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-yellow-200 text-yellow-900 font-semibold px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(skill)}
                      className="text-red-600 font-bold"
                    >
                      ×
                    </button>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Description
              </label>
              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write something about your team..."
                rows={3}
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
              />
            </div>

            {/* isOpen Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-semibold">Team Open for Joining?</label>
              <Switch
                checked={form.isOpen}
                onCheckedChange={(checked) => setForm({ ...form, isOpen: checked })}
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                className="w-full py-3 text-lg font-bold bg-yellow-500 text-white rounded-xl shadow-[0_0_20px_rgba(255,255,0,0.4)] hover:bg-yellow-600 hover:shadow-[0_0_30px_rgba(255,255,0,0.6)] transition-all"
              >
                Submit Team Details
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinTeam;
