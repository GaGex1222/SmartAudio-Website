import type { Metadata } from "next";

import { Heebo } from "next/font/google"; // ייבוא של Heebo

import "./globals.css";



// הגדרת הפונט Heebo

const heebo = Heebo({

  subsets: ["latin", "hebrew"], // חשוב להוסיף hebrew כדי שהפונט יעבוד בעברית

  variable: "--font-heebo",

  weight: ["100", "300", "400", "500", "700", "800", "900"], // טעינת כל המשקלים לעיצוב היצירתי

});



export const metadata: Metadata = {

  title: "SmartAudio | פתרונות תקשורת וחשמל חכם",

  description: "סמארטאודיו מתמחה בפתרונות תקשורת, מצלמות אבטחה, רשתות וחשמל חכם",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html

      lang="he" // שיניתי לעברית

      dir="rtl" // הגדרת כיוון דף מימין לשמאל כברירת מחדל

      className={`${heebo.variable} h-full antialiased`}

    >

      <body className={`${heebo.className} min-h-full flex flex-col`}>

        {children}

      </body>

    </html>

  );

}