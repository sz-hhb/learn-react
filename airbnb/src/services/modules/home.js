import hyRequest from "../request";

export function getHomeGoodPriceInfoData() {
  return hyRequest.get({ url: "/home/goodprice" });
}
