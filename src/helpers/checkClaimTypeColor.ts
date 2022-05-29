export const checkClaimTypeColor = (type: string) => {
  switch (type) {
    case "Hardwere": {
      return { background: "#7DB59A" };
    }
    case "Software": {
      return { background: "#FF7675" };
    }
    case "Troubleshooting": {
      return { background: "#6C5CE7" };
    }
    case "Networking": {
      return { background: "#FDCB6E" };
    }
    default: {
      return { background: "#7DB59A" };
    }
  }
};
