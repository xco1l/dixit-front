import React from 'react';
import './Message.scss';

export const Message = ({ author, text }: IMEssageProps) => {
  return (
    <div className="message">
      <span className="message__author">
        <b>{author}: </b>
      </span>
      <text className="message__text">{text}</text>
    </div>
  );
};

export interface IMEssageProps {
  author: string;
  text: string;
}
