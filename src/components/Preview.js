import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BusinessCard from './BusinessCard';

const Preview = ({ Values }) => {
  const bcRef = useRef(null);

  const handleDownload = async (format) => {
    const canvas = await html2canvas(bcRef.current);
    const imgData = canvas.toDataURL('image/png');

    if (format === 'PDF') {
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 100);
      pdf.save(`${Values.Name}.pdf`);
    } else {
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${Values.Name}.${format.toLowerCase()}`;
      link.click();
    }
  };

  return (
    <section className='Preview'>
      <h2>Preview</h2>
      <div className='Preview-Wrapper' ref={bcRef}>
        <BusinessCard Values={Values} />
      </div>
      <div className='Preview-Actions'>
        <button onClick={() => handleDownload('PDF')}>Save as PDF</button>
        <button onClick={() => handleDownload('PNG')}>Save as PNG</button>
        <button onClick={() => handleDownload('JPEG')}>Save as JPEG</button>
      </div>
    </section>
  );
};

export default Preview;
