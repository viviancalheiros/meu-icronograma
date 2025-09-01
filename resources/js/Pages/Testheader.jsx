import React from 'react';
import Header from '@/Components/Header';


export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {}
     
      <main>
        {children}
      </main>
    </div>
  );
}
