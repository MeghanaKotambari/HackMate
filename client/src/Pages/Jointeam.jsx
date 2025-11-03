import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Jointeam = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/hackmate/team/getAllTeams");
        setTeams(res.data.teams || []);
      } catch (err) {
        console.error("Error fetching teams:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
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

      {/* Content */}
      <div className="relative z-10 p-10 overflow-y-auto h-full">
        <h1
          className="text-4xl font-extrabold text-center text-yellow-400 mb-8"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          Available Hackathon Teams
        </h1>

        {loading ? (
          <p className="text-center text-white italic">Loading teams...</p>
        ) : teams.length === 0 ? (
          <p className="text-center text-gray-200 italic">No teams available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <motion.div
                key={team._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200 hover:shadow-yellow-400/40 transition-all">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-yellow-600 mb-2">
                      {team.teamName}
                    </h2>

                    <p className="text-gray-700 font-semibold mb-1">
                      🏆 {team.hackathonName}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      🗓{" "}
                      {new Date(team.hackathonStartDate).toLocaleDateString()} →{" "}
                      {new Date(team.hackathonEndDate).toLocaleDateString()}
                    </p>

                    {/* Leader */}
                    <p className="text-gray-800 text-sm mt-2">
                      👑 Leader:{" "}
                      <span className="font-semibold">
                        {team.leader?.firstName} {team.leader?.lastName}
                      </span>
                    </p>

                    {/* Members */}
                    <p className="text-gray-700 text-sm mt-1">
                      👥 Members: {team.members?.length || 0}/{team.maxMembers}
                    </p>

                    {/* Skills */}
                    <div className="mt-3">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {team.requiredSkills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-yellow-200 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <Button
                      onClick={() => navigate(`/team/${team._id}`)}
                      className="mt-5 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-all"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jointeam;
