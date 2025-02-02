const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center flex-start text-center -mt-20 px-5 md:px-0">
        <div>
          <div>
            <div>
              <div
                style={{ display: "contents" }}
              >
                <div
                  style={{ height: "100%", opacity: 1, borderRadius: "44px" }}
                >
                  <div
                    
                    style={{
                      outline: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: 0,
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                  </div>
                </div>
              </div>
            </div>
            <div
      
              style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none",
              }}
            >
              <h2 className="text-[40px] --local-clashgrotesk md:text-[54px]">
                Grab, Edit, and Download
              </h2>
            </div>
          </div>
          <div

            style={{
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              transform: "none",
            }}
          >
            <p className=" text-lg md:text-[22px] text-white --local-clashgrotesk">
              Features built to enhance your editing capabilities
            </p>
          </div>
        </div>
        <div className="relative max-w-[900px] overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <video
              width="100%"
              id="video1"
              style={{ borderRadius: "6px" }}
              aria-hidden="true"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                src="https://github.com/user-attachments/assets/11acbcd7-e54e-478c-a71a-fcf03159549b"
                type="video/mp4"
              />
            </video>
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-black pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
