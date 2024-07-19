import localFont from "next/font/local";

export const EditorsNoteFont = localFont({
  src: [
    {
      path: "../assets/fonts/editors-note/EditorsNote-Regular.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/editors-note/EditorsNote-Bold.otf",
      weight: "100",
      style: "bold",
    },
    {
      path: "../assets/fonts/editors-note/EditorsNote-Italic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--EditorsNote",
});
