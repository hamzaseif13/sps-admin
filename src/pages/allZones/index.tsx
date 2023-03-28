import React from "react";
import { Link } from "react-router-dom";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import useToggle from "../../hooks/useToggle";
import { CustomModal } from "../../components/CustomModal";
import QRGenerator from "./QRGenerator";
const AllZones = () => {
  const [qrModal, toggleQR] = useToggle(false);
  return (
    <main className="px-2  mt-[2rem]">
      <h1 className=" font-bold title text-center mb-4">Zones</h1>
      <section className="flex gap-2 justify-center">
        <div className="p-4 rounded-lg shadow">
          <div className="flex gap-2 items-center">
            <h1 className="text-2xl font-medium">City Mall South Gate</h1>
            <span className="block font-bold border p-2 rounded-lg">
              TC-102
            </span>
          </div>
          <p className="text-gray-500 my-2">
            الدوار الرابع، Zahran St, Amman, Jordan
          </p>
          <h2 className="my-2">Total Spaces : 15</h2>
          <h2 className="my-2">Available Spaces : 5</h2>
          <div className="flex gap-2">
            <button
              onClick={toggleQR}
              className="submit-btn block my-2 bg-gray-800">
              <QrCode2Icon />
            </button>
            <button className="submit-btn block my-2">Edit</button>
          </div>
          <CustomModal
            open={qrModal}
            onClose={toggleQR}
            title="Qr Code For Zone">
            <QRGenerator />
          </CustomModal>
        </div>
      </section>
    </main>
  );
};

export default AllZones;
