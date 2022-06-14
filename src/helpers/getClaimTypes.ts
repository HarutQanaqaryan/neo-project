export const getClaimTypes = (type: string) => {
  switch (type) {
    case "Hardware": {
      return "hard";
    }
    case "Software": {
      return "soft";
    }
    case "Troubleshooting": {
      return "troublesh";
    }
    case "Networking": {
      return "net";
    }
    default: {
      return "soft";
    }
  }
};

export const convertClaimTypes = (type: string) => {
  switch (type) {
    case "hard": {
      return "Hardware";
    }
    case "soft": {
      return "Software";
    }
    case "troublesh": {
      return "Troubleshooting";
    }
    case "net": {
      return "Networking";
    }
    default: {
      return "";
    }
  }
}