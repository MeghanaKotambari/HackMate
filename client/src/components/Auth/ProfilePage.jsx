import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([""]);
  const [interests, setInterests] = useState([""]);
  const [availability, setAvailability] = useState(true);
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleAddSkill = () => setSkills([...skills, ""]);
  const handleRemoveSkill = (index) => setSkills(skills.filter((_, i) => i !== index));
  const handleSkillChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  const handleAddInterest = () => setInterests([...interests, ""]);
  const handleRemoveInterest = (index) => setInterests(interests.filter((_, i) => i !== index));
  const handleInterestChange = (index, value) => {
    const updated = [...interests];
    updated[index] = value;
    setInterests(updated);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("✅ Profile saved successfully!");
    }, 1500);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Animated Background */}
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

      {/* Scrollable Container */}
      <div className="relative z-10 flex justify-center items-center h-full w-full overflow-y-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.2)] p-10"
        >
          {/* Title */}
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-6xl font-extrabold text-yellow-400 drop-shadow-[3px_3px_0px_#000] text-center mb-2"
          >
            HACKMATE
          </h1>
          <p className="text-white/90 mb-10 italic text-center text-lg">
            Build your profile and connect with teammates 🌐
          </p>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-8">
            {/* Bio */}
            <div>
              <label className="block text-white/80 mb-2 text-sm">Bio</label>
              <Textarea
                value={bio}
                onChange={(e) => setBio(e.target.value.slice(0, 300))}
                placeholder="Full-stack developer passionate about hackathons and open source projects..."
                className="bg-transparent text-white border border-white/50 placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400 w-full"
                rows={3}
                maxLength={300}
              />
              <p className="text-right text-xs text-white/60 mt-1">
                {bio.length}/300 characters
              </p>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-white/80 mb-2 text-sm">Skills</label>
              <div className="space-y-2">
                {skills.map((skill, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={skill}
                      onChange={(e) => handleSkillChange(i, e.target.value)}
                      placeholder="e.g. React"
                      className="bg-transparent text-white border border-white/50 placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400 w-full"
                    />
                    {i > 0 && (
                      <Button
                        type="button"
                        onClick={() => handleRemoveSkill(i)}
                        className="border border-white/60 text-white bg-transparent hover:bg-white/20 transition-all"
                      >
                        ✕
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={handleAddSkill}
                  className="border border-white/60 text-white bg-transparent hover:bg-white/20 font-semibold transition-all w-full"
                >
                  + Add Skill
                </Button>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-white/80 mb-2 text-sm">Interests</label>
              <div className="space-y-2">
                {interests.map((interest, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={interest}
                      onChange={(e) => handleInterestChange(i, e.target.value)}
                      placeholder="e.g. Hackathons"
                      className="bg-transparent text-white border border-white/50 placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400 w-full"
                    />
                    {i > 0 && (
                      <Button
                        type="button"
                        onClick={() => handleRemoveInterest(i)}
                        className="border border-white/60 text-white bg-transparent hover:bg-white/20 transition-all"
                      >
                        ✕
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={handleAddInterest}
                  className="border border-white/60 text-white bg-transparent hover:bg-white/20 font-semibold transition-all w-full"
                >
                  + Add Interest
                </Button>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center justify-between text-white/80">
              <label className="text-sm">Availability</label>
              <Button
                type="button"
                onClick={() => setAvailability(!availability)}
                className="border border-white/60 text-white bg-transparent hover:bg-white/20 font-semibold transition-all px-4 py-1 rounded-lg"
              >
                {availability
                  ? "Looking for a Team 🤝"
                  : "Looking for Team Members 🚀"}
              </Button>
            </div>

            {/* Links */}
            <div>
              <label className="block text-white/80 mb-2 text-sm">GitHub</label>
              <Input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/yourusername"
                className="bg-transparent text-white border border-white/50 placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400 w-full"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">LinkedIn</label>
              <Input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://www.linkedin.com/in/yourusername/"
                className="bg-transparent text-white border border-white/50 placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400 w-full"
              />
            </div>

            {/* Save Button */}
            <Button
              type="submit"
              disabled={isSaving}
              className="w-full border border-white/60 text-white bg-transparent hover:bg-white/20 font-semibold transition-all py-3 rounded-xl mt-4"
            >
              {isSaving ? "Saving..." : "Save Profile"}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.4, scale: 1.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px]
                   bg-gradient-to-r from-yellow-400 via-pink-400 to-sky-400
                   rounded-full blur-[250px] -translate-x-1/2 -translate-y-1/2
                   z-0 opacity-30"
      />
    </div>
  );
};

export default ProfilePage;
