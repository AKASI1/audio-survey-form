import { createContext } from "react";

/*_______________________________________*/

// Angry AUDIOS
// a1
import a1_1 from "./Audios/Angry/a1/a1-1-fs2-mm.wav";
import a1_2 from "./Audios/Angry/a1/a1-1-g.wav";
import a1_3 from "./Audios/Angry/a1/a1-1-tt2-mm.wav";
import a1_4 from "./Audios/Angry/a1/a1-1-tt2-ms.wav";
// a2
import a2_1 from "./Audios/Angry/a2/a2-1-fs2-mm.wav";
import a2_2 from "./Audios/Angry/a2/a2-1-g.wav";
import a2_4 from "./Audios/Angry/a2/a2-1-tt2-mm.wav";
import a2_3 from "./Audios/Angry/a2/a2-1-tt2-ms.wav";
// a3
import a3_1 from "./Audios/Angry/a3/a3-2-fs2-mm.wav";
import a3_2 from "./Audios/Angry/a3/a3-2-g.wav";
import a3_3 from "./Audios/Angry/a3/a3-2-tt2-mm.wav";
import a3_4 from "./Audios/Angry/a3/a3-2-tt2-ms.wav";

/*_______________________________________*/

// Joy AUDIOS
// j1
import j1_1 from "./Audios/Joy/j1/j1-2-fs2-mm.wav";
import j1_2 from "./Audios/Joy/j1/j1-2-g.wav";
import j1_3 from "./Audios/Joy/j1/j1-2-tt2-mm.wav";
import j1_4 from "./Audios/Joy/j1/j1-2-tt2-ms.wav";
// j2
import j2_1 from "./Audios/Joy/j2/j2-2-fs2-mm.wav";
import j2_2 from "./Audios/Joy/j2/j2-2-g.wav";
import j2_4 from "./Audios/Joy/j2/j2-2-tt2-mm.wav";
import j2_3 from "./Audios/Joy/j2/j2-2-tt2-ms.wav";
// j3
import j3_1 from "./Audios/Joy/j3/j3-2-fs2-mm.wav";
import j3_2 from "./Audios/Joy/j3/j3-2-g.wav";
import j3_3 from "./Audios/Joy/j3/j3-2-tt2-mm.wav";
import j3_4 from "./Audios/Joy/j3/j3-2-tt2-ms.wav";

/*_______________________________________*/

// Sad AUDIOS
// s1
import s1_1 from "./Audios/Sad/s1/s1-1-fs2-mm.wav";
import s1_2 from "./Audios/Sad/s1/s1-1-g.wav";
import s1_3 from "./Audios/Sad/s1/s1-1-tt2-mm.wav";
import s1_4 from "./Audios/Sad/s1/s1-1-tt2-ms.wav";
// s2
import s2_1 from "./Audios/Sad/s2/s2-2-fs2-mm.wav";
import s2_2 from "./Audios/Sad/s2/s2-2-g.wav";
import s2_4 from "./Audios/Sad/s2/s2-2-tt2-mm.wav";
import s2_3 from "./Audios/Sad/s2/s2-2-tt2-ms.wav";
// s3
import s3_1 from "./Audios/Sad/s3/s3-2-fs2-mm.wav";
import s3_2 from "./Audios/Sad/s3/s3-2-g.wav";
import s3_3 from "./Audios/Sad/s3/s3-2-tt2-mm.wav";
import s3_4 from "./Audios/Sad/s3/s3-2-tt2-ms.wav";

/*___________________________________________________________________________________*/

export const Context = createContext();

/*___________________________________________________________________________________*/
const AudiosContext = (props) => {
  const audios = [
    {
      title: "Angry",
      sections: [
        {
          type: "Angry-1",
          audios: [
            { name: "Bossa Nova", audio: a1_1 },
            { name: "Desitalk Exclusive Life", audio: a1_2 },
            { name: "Nightlife Michael Kobrin", audio: a1_3 },
            { name: "Spanish beach", audio: a1_4 },
          ],
        },
        {
          type: "Angry-2",
          audios: [
            { name: "falling", audio: a2_1 },
            { name: "see", audio: a2_2 },
            { name: "where are yo", audio: a2_3 },
            { name: "wish someone loved me", audio: a2_4 },
          ],
        },
        {
          type: "Angry-3",
          audios: [
            { name: "AKASI", audio: a3_1 },
            { name: "Peaky Blinders", audio: a3_2 },
            { name: "Sounds good always", audio: a3_3 },
            { name: "only you", audio: a3_4 },
          ],
        },
      ],
    },
    {
      title: "Joy",
      sections: [
        {
          type: "Joy-1",
          audios: [
            { name: "Bossa Nova", audio: j1_1 },
            { name: "Desitalk Exclusive Life", audio: j1_2 },
            { name: "Nightlife Michael Kobrin", audio: j1_3 },
            { name: "Spanish beach", audio: j1_4 },
          ],
        },
        {
          type: "Joy-2",
          audios: [
            { name: "falling", audio: j2_1 },
            { name: "see", audio: j2_2 },
            { name: "where are yo", audio: j2_3 },
            { name: "wish someone loved me", audio: j2_4 },
          ],
        },
        {
          type: "Joy-3",
          audios: [
            { name: "AKASI", audio: j3_1 },
            { name: "Peaky Blinders", audio: j3_2 },
            { name: "Sounds good always", audio: j3_3 },
            { name: "only you", audio: j3_4 },
          ],
        },
      ],
    },
    {
      title: "Sad",
      sections: [
        {
          type: "Sad-1",
          audios: [
            { name: "Bossa Nova", audio: s1_1 },
            { name: "Desitalk Exclusive Life", audio: s1_2 },
            { name: "Nightlife Michael Kobrin", audio: s1_3 },
            { name: "Spanish beach", audio: s1_4 },
          ],
        },
        {
          type: "Sad-2",
          audios: [
            { name: "falling", audio: s2_1 },
            { name: "see", audio: s2_2 },
            { name: "where are yo", audio: s2_3 },
            { name: "wish someone loved me", audio: s2_4 },
          ],
        },
        {
          type: "Sad-3",
          audios: [
            { name: "AKASI", audio: s3_1 },
            { name: "Peaky Blinders", audio: s3_2 },
            { name: "Sounds good always", audio: s3_3 },
            { name: "only you", audio: s3_4 },
          ],
        },
      ],
    },
  ];
  /*_____________________________________*/

  return <Context.Provider value={audios}>{props.children}</Context.Provider>;
};
export default AudiosContext;
/*___________________________________________________________________________________*/
