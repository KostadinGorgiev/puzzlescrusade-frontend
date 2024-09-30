import axiosInterface from "../utils/axios";

// throttled synchroize call for backend data update
type callTapApiParams = {
  id: number;
  coin_balance: number;
  level_point: number;
  energy_point: number;
};
export const callTapApi = async ({
  id,
  coin_balance,
  energy_point,
  level_point,
}: callTapApiParams) => {
  const response = await axiosInterface.post("users/tap", {
    id,
    coin_balance,
    energy_point,
    level_point,
  });
  return response.data;
};
