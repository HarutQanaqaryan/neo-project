export const checkClaimTypeColor = (type: string) => {
  switch (type) {
    case "Hardware": {
      return { background: "#FF7675" };
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
      return { background: "#dae7e0" };
    }
  }
};
