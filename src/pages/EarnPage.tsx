import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import TriAngleIcon from '../Icons/TriAngleIcon'
import CalendarIcon from '../Icons/CalendarIcon'
import { Task, TaskStatus, User } from '../types/types'
import XIcon from '../Icons/XIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'
import TelegramIcon from '../Icons/TelegramIcon'
import CheckCircleIcon from '../Icons/CheckCircleIcon'
import AngleRightIcon from '../Icons/AngleRightIcon'
import { useAppDispatch, useAppSelector } from '../hooks'
import { changePage, updateUser } from '../store/appSlice'
import axiosInterface from '../utils/axios'
import { useUtils } from '@telegram-apps/sdk-react'

interface TaskStatusComponentProps {
  status: TaskStatus
  onClick?: () => void
}

const EarnPage: React.FC = () => {
  const user = useAppSelector((state) => state.app.game?.user) as User
  const dispatch = useAppDispatch()
  const utils = useUtils()
  const [loading, setLoading] = useState<boolean>(false);

  const taskList: Task[] = [
    {
      icon: <XIcon className="flex-none w-[3.83vw] h-[3.46vw]" />,
      title: 'Follow Puzzles Crusade on X',
      type: 'twitter',
      url: 'https://exampletwitter.com'
    },
    {
      icon: <YoutubeIcon className="flex-none w-[4.92vw] h-[3.46vw]" />,
      title: 'Subscribe on YouTube',
      type: 'youtube',
      url: 'https://exampleyoutube.com'
    },
    {
      icon: <TelegramIcon className="flex-none w-[4.19vw] h-[3.46vw]" />,
      title: 'Join Puzzles Crusade community',
      type: 'telegram',
      url: 'https://exampletelegram.com'
    },
  ]

  const TaskStatusComponent: React.FC<TaskStatusComponentProps> = ({
    status,
    onClick,
  }) => {
    if (status === 'todo') {
      return (
        <div
          className="w-[10.66vw] h-[3.73vw] flex items-center justify-center bg-[#4B4955] rounded-full"
          onClick={() => {
            if (onClick) onClick()
          }}
        >
          <span className="text-[2.13vw] font-medium text-[#EAEAEA]">
            Start
          </span>
        </div>
      )
    } else if (status === 'claim') {
      return (
        <div
          className="w-[10.66vw] h-[3.73vw] flex items-center justify-center bg-[#FAB648] rounded-full"
          onClick={() => {
            if (onClick) onClick()
          }}
        >
          <span className="text-[2.13vw] font-medium text-[#221E33]">
            Claim
          </span>
        </div>
      )
    } else {
      return (
        <CheckCircleIcon
          fill="#4B4955"
          className="flex-none w-[2.66vw] h-[2.66vw]"
        />
      )
    }
  }

  const handleTaskClick = async (task: Task) => {
    let status = taskStatus(task);
    if (!loading) {
      if (status === 'todo') {
        console.log('click task here', task)
        utils.openLink(task.url)
        await axiosInterface.post('task/complete', {
          id: user.t_user_id,
          task_type: task.type
        })
      } else if (status === 'claim') {
        await axiosInterface.post('task/claim', {
          id: user.t_user_id,
          task_type: task.type
        })
      }
      let response = await axiosInterface.get('task/list', {
        params: {
          id: user.t_user_id
        }
      })
      console.log(response);
      dispatch(updateUser(response.data.user as User))

    }
  }

  const taskStatus = (task: Task): TaskStatus => {
    let index = user.TaskStatuses.findIndex((uTask) => uTask.task === task.type)
    if (index !== -1) {
      return user.TaskStatuses[index].status
    } else {
      return 'todo'
    }
  }

  return (
    <MainLayout bg="gradient-color">
      <div className="pt-[7.2vw] px-[4.13vw] pb-[3.46vw]">
        <div className="flex flex-col items-center px-[2vw]">
          <div className="text-[6.4vw] font-bold text-[#EAEAEA] mb-[5.6vw]">
            Earn extra coins
          </div>
          <div className="text-[3.2vw] font-medium text-[#AAAAAA] text-center mb-[8vw]">
            Complete tasks to earn more coins and don’t forget to
            <br /> check in daily for your gifts and chests.
          </div>
          <div
            className="h-[21.86vw] flex-1 rounded-[2.66vw] bg-[#4B4955] px-[4.8vw] pt-[2.93vw] pb-[4.8vw] mb-[5.06vw] w-full"
            onClick={() => dispatch(changePage('daily-checkin'))}
          >
            <div className="flex gap-[4.53vw]">
              <CalendarIcon className="w-[6.4vw] h-[6.4vw]" />
              <div className="flex-1">
                <div className="text-[4.26vw] font-bold text-white mb-[2.66vw] leading-none">
                  Daily Check-in bonus
                </div>
                <div className="text-[3.2vw] font-medium text-[#EAEAEA] leading-tight">
                  Enter the game every day and get a<br /> nice and well
                  deserved coin boost.
                </div>
              </div>
              <div className="flex items-center h-full">
                <AngleRightIcon className="flex-none w-[3.46vw] h-[6.82vw] mt-[4.53vw]" />
              </div>
            </div>
          </div>
          <div className="relative h-[3.2vw] mb-[3.46vw]">
            <TriAngleIcon className="w-[3.2vw] h-[3.2vw] absolute left-1/2 -translate-x-1/2" />
            <TriAngleIcon className="w-[3.2vw] h-[3.2vw] absolute left-1/2 -translate-x-1/2 rotate-180" />
          </div>
          <div className="text-[4.26vw] font-light text-white mb-[3.2vw] leading-none">
            Tasks
          </div>
        </div>
        <div className="pt-[3.6vw] border-t-[0.26vw] border-[#FAB648] flex flex-col">
          {taskList.map((task, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[15.6vw]">
                  {task.icon}
                </div>
                <div className="flex-1 text-[2.66vw] font-medium text-[#AAAAAA] leading-none">
                  {task.title}
                </div>
                <div className="flex items-center justify-center w-[10.8vw]">
                  <TaskStatusComponent
                    status={taskStatus(task)}
                    onClick={() => handleTaskClick(task)}
                  />
                </div>
              </div>
              <div className="w-full border-t-[0.13vw] border-[#AAAAAA] my-[3.46vw] opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default EarnPage
