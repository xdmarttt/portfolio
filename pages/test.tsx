import { useEffect, useState } from "react";

export const Test = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  return (
    <div className="home-container">
      <h2>Test me page</h2>

      {isMounted && (
        <button
          onClick={() => {
            window.CommandBar.addComponent(
              "record-preview-with-image",
              "Basic Record Preview with an image",
              {
                mount: (elem) => ({
                  render: (data, metadata) => {
                    console.log(data);
                    elem.innerHTML =
                      "<div>" + "<h3>" + data.name + "</h3>" + "</div>";
                  },
                  unmount: (elem) => {
                    // ... clean up any timers, event handlers, etc. ...
                  },
                }),
              }
            );

            window.CommandBar.addRecords(
              "users",
              [
                { name: "Jane", id: 1 },
                { name: "Jill", id: 2 },
                { name: "Jack", id: 3 },
              ],
              {
                labelKey: "name",
                detail: {
                  type: "component",
                  value: "record-preview-with-image",
                },
              }
            );
          }}
        >
          Hit me to save
        </button>
      )}
      <br />
      <br />
      {isMounted && (
        <button
          onClick={() => {
            window.CommandBar.trackEvent("test-nudge", {});
          }}
        >
          Trigger nudge
        </button>
      )}
    </div>
  );
};

export default Test;
