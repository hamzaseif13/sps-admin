import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
interface Props{
  zoneId:number
}
// TODO 
/* qr capital 
qr imagewith name and number */

const QRGenerator:React.FC<Props> = ({zoneId}) => {
    const [qrData, setQRData] = useState<string>();

    useEffect(()=>{
        QRCode.toDataURL(String(zoneId), (err, url) => {
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
    <div className='flex justify-center flex-col'>
        {
        qrData &&  <img src={qrData} alt="QR Code"  className='m-auto w-[500px]'/>
        }
        <button onClick={downloadQRCode} className='submit-btn '>Download QR Code</button>
    </div>
  )
}

export default QRGenerator