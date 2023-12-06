const React = require("react");

const types = [
  "hA",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "h8",
  "h9",
  "h10",
  "hJ",
  "hQ",
  "hK",
  "cA",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "c10",
  "cJ",
  "cQ",
  "cK",
  "dA",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "d10",
  "dJ",
  "dQ",
  "dK",
  "sA",
  "s2",
  "s3",
  "s4",
  "s5",
  "s6",
  "s7",
  "s8",
  "s9",
  "s10",
  "sJ",
  "sQ",
  "sK",
];

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return shuffled;
}

class Deck extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;

    const rot = () => ({
      transform: `rotate(${Math.random() > 0.5 ? "" : "-"}${
        Math.random() * 10
      }deg) translateY(${Math.random() > 0.5 ? "" : "-"}${
        Math.random() * 5
      }px)`,
    });

    const shuffled = shuffleArray(types);

    return (
      <div className="deck">
        {Array(props.value)
          .fill()
          .map((_, i) => (
            <span
              key={i}
              className="card"
              data-type={shuffled[i]}
              style={rot()}
            ></span>
          ))}
      </div>
    );
  }
}

module.exports = Deck;
