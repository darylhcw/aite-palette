import emmaPic from '$assets/images/emmaProfile.webp';
import risaPic from '$assets/images/risa.webp';
import stellaPic from '$assets/images/stella.webp';
import rosePic from '$assets/images/rose.webp';
import giovanniPic from '$assets/images/giovanni.webp';

// Note: The chat doesn't actually "work or has proper data types!".
export interface ChatListItem {
  contact: Contact
  lastMessage: string;
  lastSenderIsUs: boolean;
  time: string;
}
export interface ChatMessage {
  sender: Contact;
  message: string;
  time: string;
}
export interface Contact {
  name: string;
  src: string;
}

export const contacts = {
  millie: {
    name: "Risa Romano",
    src: risaPic,
  },
  emma: {
    name: "Emma Paletto",
    src: emmaPic,
  },
  elira: {
    name: "Stella Artiste",
    src: stellaPic,
  },
  giovanni: {
    name: "Giovanni Sketcher",
    src: giovanniPic,
  },
  rosemi: {
    name: "Rose Brushwelle",
    src: rosePic,
  }
}

export const chatList : ChatListItem[] = [
  {
    contact: contacts.millie,
    lastMessage: "Anytime!",
    lastSenderIsUs: true,
    time: "5:06 PM"
  },
  {
    contact: contacts.elira,
    lastMessage: "SHEEEEEEEESSSH",
    lastSenderIsUs: false,
    time: "11:59 AM"
  },
  {
    contact: contacts.giovanni,
    lastMessage: "Call me ASAP",
    lastSenderIsUs: true,
    time: "Yesterday"
  },
  {
    contact: contacts.rosemi,
    lastMessage: "Thanks for the great work you did!",
    lastSenderIsUs: false,
    time: "21/3/2023"
  },
]

export const millieChat : ChatMessage[] = [
  {
    sender: contacts.millie,
    message: "Hey Emma, I need help with my website!",
    time: "4:20 PM"
  },
  {
    sender: contacts.emma,
    message: "Sure, how may I help you?",
    time: "4:27 PM"
  },
  {
    sender: contacts.millie,
    message: "I can't decide on a color scheme, what should I do?",
    time: "4:30 PM"
  },
  {
    sender: contacts.emma,
    message: "You can try generating one using AIte Palette.",
    time: "4:32 PM"
  },
  {
    sender: contacts.millie,
    message: "So I've done that, how do I use all these colors?",
    time: "4:33 PM"
  },
  {
    sender: contacts.emma,
    message: "There's a few examples on the site, have a look at them for some ideas.",
    time: "4:35 PM"
  },{
    sender: contacts.millie,
    message: "I will, do you have any other tips?",
    time: "4:35 PM"
  },
  {
    sender: contacts.emma,
    message: `Some tips I have:
             1) Make sure to use images that match your colors, if you can't change the image, try applying color blends to change adjust the image
             2) Try making use of the as many of the different shades as you need. You can't build a website with just five colors!
             3) Don't forget about greys! Not everything needs to be in color, try incorporating greys when you don't need a color!`,
    time: "4.50 PM"
  },{
    sender: contacts.millie,
    message: "Wow, those are some useful tips, thanks Emma!",
    time: "5:05 PM"
  },
  {
    sender: contacts.emma,
    message: "Anytime!",
    time: "5:06 PM"
  },
]
