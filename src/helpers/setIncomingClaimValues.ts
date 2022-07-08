type SetIncomingClaimValueTypes = {
  e: React.MouseEvent<HTMLElement>;
  claims: any;
  dispatch: any;
  action: string;
};

export const setIncomingClaimValues = (param: SetIncomingClaimValueTypes) => {
  const { e, claims, dispatch, action } = param;

  const parentElemId = e.currentTarget.parentElement?.id;
  const claimIds = claims.map((el: any) => el._id);

  claimIds.includes(parentElemId) &&
    claims.forEach((el: any) => {
      if (parentElemId === el._id) {
        dispatch({
          type: action,
          title: el.title,
          description: el.description,
          claimType: el.type?.slug,
          status: el.status?.slug,
          id: el._id,
        });
      }
    });
};
