"use client";

import React from "react";
import { expertise, skill } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const getProgressColor = (percent: number) => {
  if (percent >= 80) return "bg-green-500"; // High expertise
  if (percent >= 60) return "bg-yellow-500"; // Medium expertise
  return "bg-red-500"; // Low expertise
};

const Expertise = () => {
  return (
    <div className="py-20 w-full px-4 md:px-8" id="expertise">
      <h1 className="heading text-center">
        My <span className="text-purple">Expertise</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Expertise Card */}
        <div className="w-full">
          <Button
            duration={15000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Expertise</h2>
              {expertise.map((item, index) => {
                let percentValue = parseInt(item.percent.replace("%", ""), 10);
                percentValue = Math.max(percentValue, 40); // Ensures minimum 40%

                return (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-sm">{item.level}</span>
                    </div>
                    {/* Full-width Responsive Progress Bar */}
                    <div className="w-[200px] sm:w-[400px] md:w-[500px] lg:w-[500px] bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(percentValue)} transition-all duration-1000`}
                        style={{ width: `${percentValue}%`, minWidth: "40%" }} // Ensures 40% minimum
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Button>
        </div>

        {/* Skills Card */}
        <div className="w-full">
          <Button
            duration={15000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              {skill.map((category, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skillIdList.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {category.iconList[idx] && (
                          <Image
                            src={category.iconList[idx]}
                            alt={skill}
                            width={20}
                            height={20}
                          />
                        )}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
