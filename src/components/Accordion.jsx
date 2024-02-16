import { useState } from "react";

const questions = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
    all levels and ideal for portfolio building.`,
  },

  {
    title: "Is Frontend Mentor free?",
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
    option providing access to a range of projects suitable for all skill levels.`,
  },

  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`,
  },

  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: `  The best place to get help is inside Frontend Mentor's Discord community. There's a help 
    channel where you can ask questions and seek support from other community members.`,
  },
];

const Accordion = () => {
  // State to store the currently expanded question index
  const [expandedIndex, setExpandedIndex] = useState(null);

  // function to toggle the expansion of a question
  const handleQuestionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-24 z-20 bg-gray-100 w-3/6 h-auto shadow-md rounded border border-gray-50 flex flex-col px-4 py-2">
      <div className="flex items-center justify-start space-x-1">
        <img
          src="/static/images/icon-star.svg"
          alt="logo for the accordion"
          className="h-4 w-8"
        />
        <h1 className="font-bold text-gray-950 text-2xl">FAQs</h1>
      </div>
      {/* Iterate over each question */}
      {questions.map((question, index) => (
        <div key={index} className="w-full">
          <button
            type="button"
            className={`flex items-center justify-between w-full  text-left mb-2 py-4 ${
              expandedIndex === index
                ? "text-purple-950 font-bold"
                : "text-purple-800 font-bold border-y border-b-0"
            }`}
          >
            <h3 className="text-xs text-purple-950 font-bold px-4 hover:text-indigo-500 transition-colors">
              {question.title}
            </h3>
            <img
              src={
                expandedIndex === index
                  ? "/static/images/icon-minus.svg"
                  : "/static/images/icon-plus.svg"
              }
              alt=""
              className="h-4 w-4 ml-auto cursor-pointer"
              onClick={() => handleQuestionClick(index)}
            />
          </button>
          {/* Conditionally render the answer based on expanded state */}
          {expandedIndex === index && (
            <div className="py-1 px-4 text-xs text-gray-600 mb-2">
              {question.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
