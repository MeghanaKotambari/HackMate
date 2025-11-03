import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UserDashboard = () => {
  // 🧑 Dummy User Data
  const user = {
    name: "Leo Johnson",
    email: "leo.johnson@example.com",
    github: "https://github.com/leo-johnson",
    linkedin: "https://linkedin.com/in/leo-johnson",
    bio: "Full-stack developer passionate about building and participating in hackathons.",
    skills: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    interests: ["Hackathons", "Open Source", "Team Collaboration"],
  };

  // 👥 Dummy Teams
  const teams = [
    {
      id: 1,
      name: "Code Avengers",
      hackathon: "HackX 2025",
      members: 4,
      maxMembers: 5,
      status: "Open",
    },
    {
      id: 2,
      name: "Byte Ninjas",
      hackathon: "DevSprint",
      members: 5,
      maxMembers: 5,
      status: "Closed",
    },
  ];

  // 📩 Dummy Join Requests
  const requests = [
    {
      id: 1,
      name: "Meghana Kotambari",
      requestedTeam: "Code Avengers",
      skills: ["React", "UI Design"],
      message: "I’d love to join your team and help with the frontend!",
    },
    {
      id: 2,
      name: "Vivek Nairy",
      requestedTeam: "Byte Ninjas",
      skills: ["Node.js", "APIs"],
      message: "Backend developer here, excited to collaborate!",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 🌈 Animated Background */}
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

      {/* 🧭 Dashboard Content */}
      <div className="relative z-10 h-full w-full overflow-y-auto p-8 flex flex-col items-center space-y-8">
        {/* 👤 User Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8"
        >
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-3xl font-bold text-yellow-500 mb-4 text-center"
          >
            👤 User Dashboard
          </h1>

          <div className="text-gray-700 space-y-2 text-center md:text-left">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
            <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
            <p><strong>Interests:</strong> {user.interests.join(", ")}</p>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                GitHub
              </a>
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* 🧑‍🤝‍🧑 Your Teams */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8"
        >
          <h2
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-2xl font-bold text-sky-500 mb-4 text-center"
          >
            🧩 Your Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team) => (
              <Card
                key={team.id}
                className="bg-gray-100 border border-gray-300 rounded-2xl shadow-md"
              >
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-gray-800">{team.name}</h3>
                  <p className="text-sm text-gray-600">
                    Hackathon: {team.hackathon}
                  </p>
                  <p className="text-sm">
                    Members: {team.members}/{team.maxMembers}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      team.status === "Open"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    Status: {team.status}
                  </p>
                  <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white w-full">
                    View Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* 📩 Join Requests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-10"
        >
          <h2
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-2xl font-bold text-green-500 mb-4 text-center"
          >
            📩 Join Requests
          </h2>
          {requests.map((req) => (
            <Card
              key={req.id}
              className="mb-4 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm"
            >
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {req.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Requested Team: <strong>{req.requestedTeam}</strong>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Skills: {req.skills.join(", ")}
                </p>
                <p className="text-sm italic text-gray-700 mb-3">
                  “{req.message}”
                </p>
                <div className="flex gap-3">
                  <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                    Accept
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard;
