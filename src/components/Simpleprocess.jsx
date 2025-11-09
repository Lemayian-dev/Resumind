import React from "react";
import { Zap, KeyRound, Download, FilePenLine } from "lucide-react";
import SimpleImage from "/group-image-1.png";
function Simpleprocess() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="m-10 flex text-primary gap-4 font-body bg-bg px-10 py-4 rounded-full">
        <Zap />
        Simple Process
      </div>
      <h1 className="text-4xl font-heading">Build your resume</h1>
      <p className="mt-4 text-l text-text font-body text-center">
        Our Streamlined process helps you create a professional resume in
        minutes with <br /> intelligent AI-powered tools and features
      </p>

      {/* Image and container */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <img
          className="w-full max-w-3xl mx-auto h-auto object-cover"
          src="src/assets/group-image-1.png"
          alt=""
        />
        <img
          className="w-full max-w-3xl mx-auto h-auto object-cover"
          src={SimpleImage || "/group-image-1.png"}
          alt="Resumind Group image"
        />
        <div className="flex flex-col gap-y-4 items-center justify-center">
          {/* Card 1 */}
          <div className="flex  gap-2 w-[400px] bg-light-purple px- py-6 rounded-2xl border-1 border-purple">
            <KeyRound className="text-purple w-20" />
            <div>
              <h3 className="text-l  font-semibold font-heading">
                Real-Time Analytics
              </h3>
              <p className="font-body text-l">
                Get instant insights into your finances with live dashboards.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="container flex  gap-2 w-[400px] hover:bg-light-green px-4 py-6 rounded-2xl hover:border-1 hover:border-green">
            <FilePenLine className="text-green w-20" />
            <div>
              <h3 className="text-l font-semibold font-heading">
                Bank-Grade Security s
              </h3>
              <p className="font-body text-l">
                End-to-end encryption, 2FA, compliance with GDPR standards{" "}
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="container flex  gap-2 w-[400px] hover:bg-light-orange px-4 py-6 rounded-2xl hover:border-1 hover:border-orange">
            <Download className="text-orange w-20" />
            <div>
              <h3 className="text-l font-semibold font-heading">
                Customizable Reports
              </h3>
              <p className="font-body text-l">
                Export professional, audit-ready financial reports for tax or
                internal review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simpleprocess;
