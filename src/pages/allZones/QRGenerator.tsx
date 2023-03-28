import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
const QRGenerator = () => {
    const [qrData, setQRData] = useState<string>();

    useEffect(()=>{
        QRCode.toDataURL('www.facebook.com', (err, url) => {
            if (err) throw err;
            setQRData(url);
          });
    },[])
    function downloadQRCode() {
        const link = document.createElement('a');
        link.download = 'QRCode.png';
        link.href = qrData!;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  return (
    <div>
        {
        qrData &&  <img src={qrData} alt="QR Code" />
        }
        <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  )
}

export default QRGenerator