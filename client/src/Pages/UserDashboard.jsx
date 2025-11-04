import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [teams, setTeams] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1️⃣ Get user profile
        const userRes = await axios.get(
          "http://localhost:3000/api/hackmate/profile/getProfile",
          {
            withCredentials: true,
          }
        );
        setUser(userRes.data.profile);

        // 2️⃣ Get user's teams
        const teamsRes = await axios.get(
          "http://localhost:3000/api/hackmate/team/getMyTeams",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setTeams(teamsRes.data.teams || []);

        // 3️⃣ For each team (leader), get join requests
        let allRequests = [];
        for (const team of teamsRes.data.teams || []) {
          try {
            const reqRes = await axios.get(
              `http://localhost:3000/api/hackmate/join/team/${team._id}`,
              {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
              }
            );
            allRequests = [...allRequests, ...reqRes.data.requests];
          } catch {
            continue; // skip if no requests
          }
        }
        setRequests(allRequests);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Handle Accept / Reject
  const handleRequestAction = async (requestId, action) => {
    try {
      await axios.post(
        `http://localhost:3000/api/hackmate/join/${requestId}/action`,
        { action },
        { withCredentials: true }
      );
      alert(`✅ Request ${action}ed successfully`);
      setRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (err) {
      console.error(`Error handling request:`, err);
      alert("❌ Failed to process request.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-700">
        Loading Dashboard...
      </div>
    );

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

      {/* 📊 Dashboard Content */}
      <div className="relative z-10 h-full w-full overflow-y-auto p-10 flex flex-col items-center space-y-10">
        {/* 👤 User Info */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-10"
          >
            <h1
              style={{ fontFamily: "'Bungee', sans-serif" }}
              className="text-4xl font-bold text-yellow-500 mb-8 text-center"
            >
              👤 User Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p>
                  <strong>Name:</strong> {user?.firstName} {user?.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>Bio:</strong> {user?.bio || "—"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Skills:</strong> {user?.skills?.join(", ") || "—"}
                </p>
                <p>
                  <strong>Interests:</strong>{" "}
                  {user?.interests?.join(", ") || "—"}
                </p>
                <div className="flex gap-4 mt-3">
                  {user?.github && (
                    <a
                      href={user?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:text-blue-800 underline"
                    >
                      GitHub
                    </a>
                  )}
                  {user?.linkedin && (
                    <a
                      href={user?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:text-blue-800 underline"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 🧩 Teams + Requests */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-7xl">
          {/* 👥 Your Teams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8"
          >
            <h2
              style={{ fontFamily: "'Bungee', sans-serif" }}
              className="text-3xl font-bold text-sky-600 mb-6 text-center"
            >
              🧩 Your Teams
            </h2>
            {teams.length > 0 ? (
              <div className="grid gap-6">
                {teams.map((team) => (
                  <Card
                    key={team._id}
                    className="bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {team.teamName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Hackathon: {team.hackathonName}
                        </p>
                        <p className="text-sm text-gray-600">
                          Members: {team.members?.length}/{team.maxMembers}
                        </p>
                        <p
                          className={`text-sm font-semibold mt-1 ${
                            team.isOpen ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          Status: {team.isOpen ? "Open" : "Closed"}
                        </p>
                      </div>
                      <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white w-full">
                        View Team
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 italic">No teams yet.</p>
            )}
          </motion.div>

          {/* 📩 Join Requests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8"
          >
            <h2
              style={{ fontFamily: "'Bungee', sans-serif" }}
              className="text-3xl font-bold text-green-500 mb-6 text-center"
            >
              📩 Join Requests
            </h2>

            {requests.length > 0 ? (
              <div className="grid gap-6">
                {requests.map((req) => (
                  <Card
                    key={req._id}
                    className="bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {req.userId?.firstName} {req.userId?.lastName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          <strong>Team:</strong> {req.teamId?.teamName}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Skills:</strong>{" "}
                          {req.userId?.skills?.join(", ") || "—"}
                        </p>
                      </div>

                      <div className="flex gap-3 mt-4">
                        <Button
                          onClick={() => handleRequestAction(req._id, "accept")}
                          className="bg-green-500 hover:bg-green-600 text-white w-1/2"
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={() => handleRequestAction(req._id, "reject")}
                          className="bg-red-500 hover:bg-red-600 text-white w-1/2"
                        >
                          Reject
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 italic">
                No join requests available.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
