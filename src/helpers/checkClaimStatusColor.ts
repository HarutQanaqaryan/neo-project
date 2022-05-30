export const checkClaimStatusColor = (status: string) => {
  switch (status) {
    case "New": {
      return "#6C5CE7";
    }
    case "In Progress": {
      return "#FDCB6E";
    }
    case "Done": {
      return "#00B894";
    }
    default: {
      return "#E84393";
    }
  }
};
