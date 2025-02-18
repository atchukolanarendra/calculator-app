import React from "react";

const History = ({ history }) => {
  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {history.length === 0 ? (
          <li>No history yet</li>
        ) : (
          history.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default History;
