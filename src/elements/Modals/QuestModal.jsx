import React, { useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import QuizIcon from '@mui/icons-material/Quiz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import LinkIcon from '@mui/icons-material/Link';
import discord from '../../assets/section2/discordfilled.png';
import tiktok from '../../assets/section2/tiktok.png';
import opinion from '../../assets/section2/opinion.png';

const QuestModal = ({ setQuestModal, onAddTask }) => {
  const modalRef = useRef();

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setQuestModal(false);
  //     }
  //   };

  //   window.addEventListener('click', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, [setQuestModal]);

  const taskTypes = [
    { type: 'visit-link', icon: <InsertLinkIcon />, color: '#f5841f', title: 'Visit link', description: 'Check out a specific link' },
    { type: 'invites', icon: <MailOutlineIcon />, color: '#7f80f1', title: 'Invites', description: 'Invite a bunch of people to join the community' },
    { type: 'api', icon: <SettingsIcon />, color: '#ff00ff', title: 'API', description: 'Do a specific action on another platform' },
    { type: 'partnership', icon: <PeopleOutlineIcon />, color: '#3f0140', title: 'Partnership', description: 'Check that a user has joined a partnership community' },
    { type: 'discord', icon: <InsertLinkIcon />, color: '#5d6af2', title: 'Discord', description: 'Join a specific Discord server' },
    { type: 'twitter', icon: <TwitterIcon />, color: '#1d9bf0', title: 'Twitter', description: 'Connect a Twitter in Setting to use this task' },
    { type: 'telegram', icon: <TelegramIcon />, color: '#28a9ea', title: 'Telegram', description: 'Join a specific Telegram channel' },
    { type: 'tiktok', icon: <img src={tiktok} className="text-white w-4" />, color: '#000000', title: 'Tik Tok', description: 'Post a video on Tik Tok' },
    { type: 'file-upload', icon: <UploadFileIcon />, color: '#ff004f', title: 'File upload', description: 'Upload an image or a file' },
    { type: 'poll', icon: <img src={discord} className="text-white w-5" />, color: '#7576ea', title: 'Poll', description: 'Vote in a poll' },
    { type: 'quiz', icon: <QuizIcon />, color: '#c55402', title: 'Quiz', description: 'Respond to a quiz with multiple answer choices' },
    { type: 'text', icon: <EditNoteIcon />, color: '#3f0140', title: 'Text', description: 'Respond to a quiz or a request in text form' },
    { type: 'number', icon: <FormatListNumberedRtlIcon />, color: '#7879f1', title: 'Number', description: 'Respond to a quiz or a request in numeric form' },
    { type: 'url', icon: <LinkIcon />, color: '#ffc107', title: 'URL', description: 'Respond to a quiz or a request in URL form' },
    { type: 'opinion-scale', icon: <img src={opinion} className="text-white w-4" />, color: '#3f0140', title: 'Opinion Scale', description: 'Respond to an opinion scale, like the NPS' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 px-2 ">
      <div
        ref={modalRef}
        className="w-[90%] md:w-3/4 p-4 bg-[#20212a] rounded-lg flex flex-col gap-3 justify-center items-center z-50 overflow-x-auto max-h-[90%]"
      >
        <div onClick={()=>setQuestModal(false)} className="text-white">close</div>
        <div className="text-[#838383] relative bg-transparent border border-[#ff00ff] rounded-lg p-3 flex w-3/4 items-center">
          <SearchIcon
            className="text-[#838383] absolute left-2"
            style={{ fontSize: '1rem' }}
          />
          <input
            className="bg-transparent flex text-start pl-6 text-sm focus:outline-none"
            placeholder="Find a task type"
          />
        </div>
        <div className="flex justify-between gap-4 w-full md:w-4/5 flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col gap-4 w-2/3 sm:w-1/2 items-start">
            {taskTypes.slice(0, Math.ceil(taskTypes.length / 2)).map((task) => (
              <div
                key={task.type}
                className="flex justify-start gap-2 items-center cursor-pointer hover:bg-[#191a1e] rounded-lg p-1"
                onClick={() => {onAddTask(task.type); setQuestModal(false)}}
              >
                <div className="p-1 rounded-full" style={{ backgroundColor: task.color }}>
                  {task.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-md font-semibold">{task.title}</span>
                  <span className="text-[#838383] text-sm">{task.description}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-2/3 sm:w-1/2 items-start justify-start">
            {taskTypes.slice(Math.ceil(taskTypes.length / 2)).map((task) => (
              <div
                key={task.type}
                className="flex justify-start gap-2 items-center cursor-pointer hover:bg-[#191a1e] rounded-lg p-1"
                onClick={() => {onAddTask(task.type); setQuestModal(false)}}
              >
                <div className="p-1 rounded-full" style={{ backgroundColor: task.color }}>
                  {task.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-md font-semibold">{task.title}</span>
                  <span className="text-[#838383] text-sm">{task.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestModal;
