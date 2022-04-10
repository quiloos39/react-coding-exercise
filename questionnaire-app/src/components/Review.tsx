import React from "react";

interface ReviewProps {
  data: {
    question: string;
    answer: string;
  }[];
}

export function Review({ data }: ReviewProps) {
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Review</h1>
      {data.map((entry, index) => (
        <p key={index}>
          <span className="font-bold">{entry.question}</span> {entry.answer}
        </p>
      ))}
    </div>
  );
}
