import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const Score: React.FC<{
    label: string;
    color: "red" | "orange" | "green" | "blue";
    result: string;
  }> = (props) => {
    const { label, color, result } = props;
    return (
      <div className={"structure-row"}>
        <div>{label}</div>
        <div className={`${color} structure-score`}>{result}</div>
      </div>
    );
  };

  return (
    <>
      <h1 style={{ fontSize: "72px", textAlign: "center" }}>
        STRUCTURE ANALYSIS
      </h1>
      <div className={"row center"}>
        <Link to={"/render-based"}>
          <div className={"structure-card"}>
            <div className={"structure-header"}>Render Based</div>
            <Score label={"readability"} color={"red"} result={"low"} />
            <Score label={"written lines"} color={"green"} result={"best"} />
            <Score label={"performance"} color={"red"} result={"worse"} />
            <Score label={"complexity"} color={"green"} result={"low"} />
            <Score label={"flexibility"} color={"red"} result={"bad"} />
            <Score label={"challenge"} color={"blue"} result={"low"} />
          </div>
        </Link>
        <Link to={"/props-based"}>
          <div className={"structure-card"}>
            <div className={"structure-header"}>Props Based</div>
            <Score label={"readability"} color={"orange"} result={"average"} />
            <Score label={"written lines"} color={"red"} result={"high"} />
            <Score label={"performance"} color={"green"} result={"good"} />
            <Score label={"complexity"} color={"green"} result={"low"} />
            <Score label={"flexibility"} color={"green"} result={"best"} />
            <Score label={"challenge"} color={"blue"} result={"average"} />
          </div>
        </Link>
        <Link to={"/hook-based"}>
          <div className={"structure-card"}>
            <div className={"structure-header"}>Hook Based</div>
            <Score label={"readability"} color={"green"} result={"best"} />
            <Score label={"written lines"} color={"green"} result={"low"} />
            <Score label={"performance"} color={"green"} result={"best"} />
            <Score label={"complexity"} color={"orange"} result={"average"} />
            <Score label={"flexibility"} color={"red"} result={"bad"} />
            <Score label={"challenge"} color={"blue"} result={"high"} />
          </div>
        </Link>

        <Link to={"/hybrid-based"}>
          <div className={"structure-card"}>
            <div className={"structure-header"}>Hybrid Based</div>
            <Score label={"readability"} color={"orange"} result={"average"} />
            <Score
              label={"written lines"}
              color={"orange"}
              result={"average"}
            />
            <Score label={"performance"} color={"green"} result={"good"} />
            <Score label={"complexity"} color={"red"} result={"high"} />
            <Score label={"flexibility"} color={"orange"} result={"average"} />
            <Score label={"challenge"} color={"blue"} result={"high"} />
          </div>
        </Link>
      </div>
    </>
  );
};
