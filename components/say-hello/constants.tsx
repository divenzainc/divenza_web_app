import { PhoneCall, Phone, Video } from "lucide-react";
import { CommunicationMedium, Location } from "./types";

// Communication medium options
export const communicationMediums: CommunicationMedium[] = [
  {
    id: "normal_call",
    label: "Normal Call",
    icon: <PhoneCall className="w-5 h-5" />,
    description: "Traditional phone call",
  },
  {
    id: "whatsapp_call",
    label: "WhatsApp Call",
    icon: <Phone className="w-5 h-5" />,
    description: "Voice or video via WhatsApp",
  },
  {
    id: "google_meet",
    label: "Google Meet",
    icon: <Video className="w-5 h-5" />,
    description: "Video conference",
  },
  {
    id: "zoom",
    label: "Zoom",
    icon: <Video className="w-5 h-5" />,
    description: "Video meeting",
  },
  {
    id: "ms_teams",
    label: "MS Teams",
    icon: <Video className="w-5 h-5" />,
    description: "Microsoft Teams call",
  },
];

// Location data
export const locations: Location[] = [
  {
    country: "Sri Lanka",
    flag: "🇱🇰",
    address: ["29A, Perakumba Road,", "Nedimala, Dehiwala, Sri Lanka"],
    phone: "+94 (70) 446-9834",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    address: ["Oshawa Centre", "419 King St W,", "Oshawa, ON", "L1J 2K5"],
    phone: "+1 (905) 439-9935",
  },
];
