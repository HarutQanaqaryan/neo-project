export const checkClaimStatusColor = (status: string) => {
  switch (status) {
    case "Declined": {
      return "#E84393";
    }
    case "New": {
      return "#6C5CE7";
    }
    case "In progress": {
      return "#FDCB6E";
    }
    case "Done": {
      return "#00B894";
    }
    default: {
      return "#dae7e0";
    }
  }
};
