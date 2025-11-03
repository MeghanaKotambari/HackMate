import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ViewDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/hackmate/team/getTeam/${id}`
        );
        setTeam(res.data.team);
      } catch (err) {
        console.error("Error fetching team:", err);
      }
    };
    fetchTeam();
  }, [id]);

  if (!team) return <p className="text-center mt-10">Loading team details...</p>;

  return (
    <div className="relative w-screen h-screen overflow-y-auto">
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

      {/* Card */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mt-10 mb-10">
        {/* Title */}
        <h1
          className="text-4xl font-extrabold text-center text-yellow-500 mb-6"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          {team.teamName}
        </h1>

        {/* Hackathon Info */}
        <p className="text-gray-800 font-semibold mb-2">
          🏆 Hackathon: {team.hackathonName}
        </p>
        <p className="text-gray-700 mb-2">
          📅 {new Date(team.hackathonStartDate).toLocaleDateString()} →{" "}
          {new Date(team.hackathonEndDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">👥 Max Members: {team.maxMembers}</p>
        <p className="text-gray-700 mb-4">
          🔓 Status: {team.isOpen ? "Open for Joining" : "Closed"}
        </p>

        {/* Skills */}
        {team.requiredSkills?.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold text-gray-800 mb-1">🧠 Required Skills:</p>
            <div className="flex flex-wrap gap-2">
              {team.requiredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {team.description && (
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-1">📝 Description:</p>
            <p className="text-gray-700 italic">{team.description}</p>
          </div>
        )}

        {/* Leader Section */}
        <div className="mb-6 bg-yellow-50 p-4 rounded-xl shadow-inner">
          <p className="font-bold text-yellow-700 mb-2 text-lg">👑 Team Leader</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">
                {team.leader.firstName} {team.leader.lastName}
              </p>
              <p className="text-gray-600 text-sm">{team.leader.email}</p>
            </div>
            <div className="flex gap-3 text-2xl text-gray-700">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow-inner">
          <p className="font-bold text-gray-800 mb-3 text-lg">👥 Team Members</p>
          {team.members.length > 0 ? (
            team.members.map((member, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b border-gray-200 py-3"
              >
                <div>
                  <p className="font-semibold text-gray-700">
                    {member.userId.firstName} {member.userId.lastName}
                  </p>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-xs">{member.userId.email}</p>
                </div>
                <div className="flex gap-3 text-xl text-gray-600">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 italic">No members added yet.</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            onClick={() => navigate(-1)}
            className="w-full sm:w-1/2 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-xl transition-all"
          >
            ⬅ Back to Teams
          </Button>

          <Button
            onClick={() => alert("✅ Successfully joined the team!")}
            disabled={!team.isOpen}
            className={`w-full sm:w-1/2 font-bold rounded-xl transition-all ${
              team.isOpen
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : "bg-gray-400 cursor-not-allowed text-gray-200"
            }`}
          >
            🤝 Join Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
