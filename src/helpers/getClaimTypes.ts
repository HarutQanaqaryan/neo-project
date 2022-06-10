export const getClaimTypes = (type: string) => {
  switch (type) {
    case "Hardwere": {
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
