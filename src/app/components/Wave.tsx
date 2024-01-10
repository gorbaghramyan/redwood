"use client";

const waveStyles: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "15vh",
    marginBottom: "-7px",
    minHeight: "100px",
    maxHeight: "150px",
};

const parallaxStyles = {
    animation: "move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite",
};

const wavePath =
    "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z";

const Wave = () => {
    return (
        <div>
            <style jsx>{`
                @keyframes move-forever {
                    0% {
                        transform: translate3d(-90px, 0, 0);
                    }
                    100% {
                        transform: translate3d(85px, 0, 0);
                    }
                }
            `}</style>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
                style={waveStyles}
            >
                <defs>
                    <path id="gentle-wave" d={wavePath} />
                </defs>
                <g
                    className="parallax"
                    style={{ ...parallaxStyles, animationDuration: "20s" }}
                >
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
    );
};

export default Wave;
