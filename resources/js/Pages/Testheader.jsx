import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer'; // Importe o Footer

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
     
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer /> {}
    </div>
  );
}