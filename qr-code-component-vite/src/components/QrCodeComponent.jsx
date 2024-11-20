import React, { memo } from "react";

const QrCodeComponent = memo(() => {
  return <div className="bg-slate-300 h-screen flex justify-center items-center">
    <div className="bg-white p-4 rounded-[20px] shadow-md text-center w-80 h-[499px]">
      <img src="/images/image-qr-code.png" alt="QR Code" className="rounded-[10px] mb-[8px]" />
      <div className="w-full h-[131px] p-[16px]">
        <h1 className="text-slate-900 font-outfit font-bold text-preset-1 tracking-tightest mb-[16px]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 font-outfit font-normal text-preset-2 tracking-wider">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </div>
  </div>
});

export default QrCodeComponent;
