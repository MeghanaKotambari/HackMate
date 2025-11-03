import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");
  const [availability, setAvailability] = useState(true);
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // ✅ Add skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  // ✅ Remove skill
  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // ✅ Add interest
  const handleAddInterest = () => {
    if (newInterest.trim() !== "" && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  // ✅ Remove interest
  const handleRemoveInterest = (interest) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  // ✅ Save profile (API Call)
  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const payload = {
        bio,
        skills,
        interests,
        availability,
        github,
        linkedin,
      };

      const res = await axios.post(
        "http://localhost:3000/api/hackmate/profile/create",
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      alert("✅ Profile saved successfully!");
      console.log("Profile created:", res.data);
    } catch (error) {
      console.error("❌ Error saving profile:", error);
      alert("❌ Failed to save profile. Please try again.");
    } finally {
      setIsSaving(false);
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

      {/* Centered Profile Card */}
      <div className="relative z-10 flex justify-center items-center h-full w-full px-4 py-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 my-10"
        >
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-4xl font-extrabold text-center text-yellow-500 mb-2"
          >
            HACKMATE PROFILE
          </h1>
          <p className="text-gray-700 mb-6 italic text-center text-lg">
            Build your profile and connect with teammates 🌐
          </p>

          <form onSubmit={handleSave} className="space-y-6">
            {/* Bio */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bio
              </label>
              <Textarea
                value={bio}
                onChange={(e) => setBio(e.target.value.slice(0, 300))}
                placeholder="Full-stack developer passionate about hackathons..."
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                rows={3}
              />
              <p className="text-right text-xs text-gray-500 mt-1">
                {bio.length}/300
              </p>
            </div>

            {/* Skills & Interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Skills
                </label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="e.g. React"
                    className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                  />
                  <Button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl"
                  >
                    +
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Interests
                </label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="e.g. Hackathons"
                    className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 rounded-xl"
                  />
                  <Button
                    type="button"
                    onClick={handleAddInterest}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl"
                  >
                    +
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, i) => (
                    <span
                      key={i}
                      className="bg-sky-200 text-sky-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {interest}
                      <button
                        type="button"
                        onClick={() => handleRemoveInterest(interest)}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="text-center mt-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Availability
              </label>
              <div className="flex justify-center gap-4">
                <Button
                  type="button"
                  onClick={() => setAvailability(true)}
                  className={`px-5 py-2 rounded-xl font-medium ${
                    availability
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Looking for a Team 🤝
                </Button>
                <Button
                  type="button"
                  onClick={() => setAvailability(false)}
                  className={`px-5 py-2 rounded-xl font-medium ${
                    !availability
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Looking for Members 🚀
                </Button>
              </div>
            </div>

            {/* GitHub & LinkedIn */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                GitHub
              </label>
              <Input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/yourusername"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 w-full rounded-xl"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                LinkedIn
              </label>
              <Input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://www.linkedin.com/in/yourusername/"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 w-full rounded-xl"
              />
            </div>

            {/* Save Button */}
            <Button
              type="submit"
              disabled={isSaving}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl mt-4"
            >
              {isSaving ? "Saving..." : "Save Profile"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
