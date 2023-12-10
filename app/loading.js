export default function Loading({ screenSize }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="loading-container">
        {screenSize === "mobile" ? (
          <img
            className="object-cover min-w-full min-h-full"
            src="./sikem (1).gif"
            alt="Loading"
          />
        ) : (
          <img
            className="object-cover min-w-full min-h-full"
            src="./sikekeys.gif"
            alt="Loading"
          />
        )}
      </div>
    </div>
  );
}
