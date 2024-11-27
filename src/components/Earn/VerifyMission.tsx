import { useState } from "react";
import ShareIcon from "../../Icons/ShareIcon";
import { taskIcon } from "../../pages/EarnPage";
import { DynamicTask, User } from "../../types/types";
import axiosInterface from "../../utils/axios";
import { useAppSelector } from "../../hooks";
import CircleCloseIcon from "../../Icons/CircleCloseIcon";

interface VerifyMissionProps {
  task: DynamicTask;
  onComplete: () => void;
}

const VerifyMission: React.FC<VerifyMissionProps> = ({ task, onComplete }) => {
  const user = useAppSelector((state) => state.app.game?.user) as User;
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleVerify = async () => {
    let response = await axiosInterface.post("task/verify-password", {
      user_id: user.t_user_id,
      task_id: task.id,
      password: password,
    });
    if (response.data.success) {
      setHasError(false);
      onComplete();
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-[6.4vw]">
        <div className="flex items-center justify-center w-[15.6vw]">
          {taskIcon[task.type]}
        </div>
        <div className="flex-1 text-[5.33vw] font-bold text-[#EAEAEA]">
          Welcome to Wallachia
        </div>
        <button className="w-[6.66vw] h-[6.66vw] outline-none border-none bg-[#4B4955] rounded-full flex items-center justify-center">
          <ShareIcon className="w-[3.2vw] h-[3.2vw]" />
        </button>
      </div>
      <div className="mb-[4vw] text-[3.73vw] font-medium text-[#AAAAAA]">
        Enter the magic word
      </div>
      <div
        className={`w-full h-[11.46vw] rounded-[1.6vw] bg-[#4B4955] border-[0.26vw] p-[2.66vw] flex items-center mb-[2.66vw] ${
          hasError ? "border-[#FF474D]" : "border-[#EAEAEA]"
        }`}
      >
        <input
          type="text"
          className="flex-1 h-full border-none outline-none bg-transparent text-[3.73vw] font-medium text-[#AAAAAA]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {hasError && (
          <CircleCloseIcon
            className="w-[5.06vw] h-[5.06vw]"
            onClick={() => setPassword("")}
          />
        )}
      </div>
      {hasError ? (
        <div className="mb-[12.53vw] text-[2.4vw] font-medium text-[#FF474D]">
          Incorrect keyword. Please try again.
        </div>
      ) : (
        <div className="mb-[12.53vw] text-[2.4vw] font-medium text-[#AAAAAA]">
          Click on verify to claim your reward.
        </div>
      )}
      <div className="w-full flex justify-center">
        <button
          className="w-[41.33vw] h-[8.26vw] rounded-[1.6vw] flex items-center justify-center border-none outline-none bg-[#EAEAEA]"
          onClick={() => handleVerify()}
        >
          <span className="text-[4.26vw] font-bold text-[#171819]">Verify</span>
        </button>
      </div>
    </div>
  );
};

export default VerifyMission;
