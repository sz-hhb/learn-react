import hyRequest from "../request";

export function getHomeGoodPriceInfoData() {
  return hyRequest.get({ url: "/home/goodprice" });
}

export function getHomeHighScoreInfoData() {
  return hyRequest.get({ url: "/home/highscore" });
}

export function getHomeDiscountInfoData() {
  return hyRequest.get({ url: "/home/discount" });
}

export function getHomeRecommendInfoData() {
  return hyRequest.get({ url: "/home/hotrecommenddest" });
}

export function getHomeLongforInfoData() {
  return hyRequest.get({ url: "/home/longfor" });
}

export function getHomePlusInfoData() {
  return hyRequest.get({ url: "/home/plus" });
}
