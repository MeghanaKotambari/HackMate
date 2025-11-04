import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const CreateTeam = () => {
  const [form, setForm] = useState({
    teamName: "",
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    maxMembers: "",
    requiredSkills: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/hackmate/team/createTeam",
        form,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // ✅ send cookies for auth
        }
      );

      alert("✅ Team created successfully!");
      console.log("Team Created:", res.data);

      setForm({
        teamName: "",
        hackathonName: "",
        hackathonStartDate: "",
        hackathonEndDate: "",
        maxMembers: "",
        requiredSkills: "",
        description: "",
      });
    } catch (error) {
      console.error("❌ Error creating team:", error);
      alert("❌ Failed to create team. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Animated Split Background */}
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

      {/* Card */}
      <div className="relative z-10 flex justify-center items-center h-full w-full px-4 py-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 my-10"
        >
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-3xl font-extrabold text-center text-yellow-500 mb-2"
          >
            Create Your Team
          </h1>
          <p className="text-gray-700 mb-8 italic text-center text-sm">
            Set up your dream hackathon team 🚀
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 2x2 Grid for Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Team Name
                </label>
                <Input
                  name="teamName"
                  value={form.teamName}
                  onChange={handleChange}
                  placeholder="Enter team name"
                  required
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Hackathon Name
                </label>
                <Input
                  name="hackathonName"
                  value={form.hackathonName}
                  onChange={handleChange}
                  placeholder="Enter hackathon name"
                  required
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Start Date
                </label>
                <Input
                  type="date"
                  name="hackathonStartDate"
                  value={form.hackathonStartDate}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
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
                  required
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                />
              </div>

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
                  required
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Required Skills
                </label>
                <Input
                  name="requiredSkills"
                  value={form.requiredSkills}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, UI/UX"
                  className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                />
              </div>
            </div>

            {/* Description (full width) */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Description
              </label>
              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write about your team..."
                rows={4}
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl w-full"
              />
            </div>

            {/* Centered Button */}
            <div className="flex justify-center pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-lg font-bold bg-yellow-500 text-white rounded-xl shadow-[0_0_20px_rgba(255,255,0,0.4)] hover:bg-yellow-600 hover:shadow-[0_0_30px_rgba(255,255,0,0.6)] transition-all"
                >
                  {isSubmitting ? "Creating..." : "Create Team"}
                </Button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateTeam;
