import "../../styles/claims.scss";
interface ClaimTitleType {
  title: string;
}
export const ClaimsTitle = (prop: ClaimTitleType) => {
  return <h4 className="claims-head_title">{prop.title}</h4>;
};
