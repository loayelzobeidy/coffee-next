import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React from 'react';
import ReduxProvider from "@/store/storeProvider";
import {wrapper} from '../store/index'; 

 export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-chinoise">
      <ReduxProvider> 
        <Header/>
        {children}
    </ReduxProvider>
        </body>
        
    </html>
  );
}

