import { AiFillFlag } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { MdCall, MdOutlinePayment, MdPersonPin } from "react-icons/md";
import { IoIosPeople, IoIosLock } from "react-icons/io";
import { SiSkypeforbusiness } from "react-icons/si";
export const sideBarData = {
  0: {
    id: 0,
    title: "Root",
    childIds: [1, 50, 51, 52, 53, 54, 55, 56],
    iconName: "",
    isChildVisible: true,
  },
  1: {
    id: 1,
    title: "Get Started",
    childIds: [2, 15, 20, 25, 48, 49],
    iconName: (
      <label className="icon rounded-circle">
        <AiFillFlag />
      </label>
    ),
    isChildVisible: false,
  },
  2: {
    id: 2,
    title: "Download and installation",
    childIds: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    iconName: "",
    isChildVisible: false,
  },
  3: {
    id: 3,
    title: "How to log in and out",
    childIds: [],
    iconName: "",
    isChildVisible: false,
    url: "/whatsapp-help-center-demo/how-tologin-info",
  },
  4: {
    id: 4,
    title: "How to download or uninstall WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  5: {
    id: 5,
    title: "How to download WhatsApp Desktop",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  6: {
    id: 6,
    title: "About supported operating systems on desktop",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  7: {
    id: 7,
    title: "About supported operating systems",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  8: {
    id: 8,
    title: "About supported devices",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  9: {
    id: 9,
    title: "Finding the More options icon",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  10: {
    id: 10,
    title: "How to update WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  11: {
    id: 11,
    title: "About the new WhatsApp Desktop experience",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  12: {
    id: 12,
    title: "About WhatsApp Web and Desktop",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  13: {
    id: 13,
    title: "How to change WhatsApp’s language",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  14: {
    id: 14,
    title: "About rooted phones and custom ROMs",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  15: {
    id: 15,
    title: "Registration",
    childIds: [16, 17, 18, 19],
    iconName: "",
    isChildVisible: false,
  },
  16: {
    id: 16,
    title: "How to register your phone number",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  17: {
    id: 17,
    title: "How to register your account with a missed call",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  18: {
    id: 18,
    title: "About waiting to request another verification code",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  19: {
    id: 19,
    title: "Can’t register phone number due to ‘invalid number’ error",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  20: {
    id: 20,
    title: "Linked Device",
    childIds: [21, 22, 23, 24],
    iconName: "",
    isChildVisible: false,
  },
  21: {
    id: 21,
    title: "About linked devices",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  22: {
    id: 22,
    title: "How to link a device",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  23: {
    id: 23,
    title: "About message history on linked devices",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  24: {
    id: 24,
    title: "About WhatsApp for Android tablets",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },

  25: {
    id: 25,
    title: "Troubleshooting",
    childIds: [
      26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
      44, 45, 46, 47,
    ],
    iconName: "",
    isChildVisible: false,
  },

  26: {
    id: 26,
    title: "Can’t see contacts",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  27: {
    id: 27,
    title: "Can’t see a contact’s profile information",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  28: {
    id: 28,
    title: "Recovering lost contacts in WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  29: {
    id: 29,
    title: "Seeing “Your devices were logged out”",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  30: {
    id: 30,
    title: "Can’t download or update WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  31: {
    id: 31,
    title: "About seeing “A database error occurred on your browser”",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  32: {
    id: 32,
    title: "Seeing Devices out of sync message",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  33: {
    id: 33,
    title: "Can’t connect to WhatsApp", // Need to change
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  34: {
    id: 34,
    title: "Can’t connect to WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },

  35: {
    id: 35,
    title: "Problems connecting to WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  36: {
    id: 36,
    title: "Don’t recognize contact’s account",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  37: {
    id: 37,
    title: "Can't change phone number",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  38: {
    id: 38,
    title: "Can’t move WhatsApp to an SD card",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  39: {
    id: 39,
    title: "Can't log out of WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  40: {
    id: 40,
    title: "Can’t use emoji in profile names",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  41: {
    id: 41,
    title: "Why can't I send long videos in WhatsApp? ",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  42: {
    id: 42,
    title: "I'm traveling and I can't get my WhatsApp code",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  43: {
    id: 43,
    title: "About using WhatsApp abroad",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  44: {
    id: 44,
    title: "Can’t use keyboard in WhatsApp",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  45: {
    id: 45,
    title: "Can’t see badge count",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  46: {
    id: 46,
    title: "Can't locate accessibility features",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  47: {
    id: 47,
    title: "About keyboard shortcuts",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  48: {
    id: 48,
    title: "Contact",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  49: {
    id: 49,
    title: "Status",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
  50: {
    id: 50,
    title: "Chats",
    childIds: [57],
    iconName: (
      <label className="icon rounded-circle">
        <BsChatText />
      </label>
    ),
    isChildVisible: false,
  },
  51: {
    id: 51,
    title: "Voice and Video Calls",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <MdCall />
      </label>
    ),
    isChildVisible: false,
  },
  52: {
    id: 52,
    title: "Communities",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <IoIosPeople />
      </label>
    ),
    isChildVisible: false,
  },
  53: {
    id: 53,
    title: "Privacy,Safety, and Security",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <IoIosLock />
      </label>
    ),
    isChildVisible: false,
  },
  54: {
    id: 54,
    title: "Account and Account Bans",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <MdPersonPin />
      </label>
    ),
    isChildVisible: false,
  },
  55: {
    id: 55,
    title: "Payments",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <MdOutlinePayment />
      </label>
    ),
    isChildVisible: false,
  },

  56: {
    id: 56,
    title: "WhatsApp Business",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <SiSkypeforbusiness />
      </label>
    ),
    isChildVisible: false,
  },
  57: {
    id: 57,
    title: "Mesay Mengistu Test",
    childIds: [],
    iconName: "",
    isChildVisible: false,
  },
};
