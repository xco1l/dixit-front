import React from 'react';
import './Chat.scss';
import { Message } from 'components';

export const Chat = () => {
  const messages: React.FunctionComponentElement<typeof Message>[] = [];

  for (let i = 0; i < 12; i++)
    messages.push(
      <Message
        author="Ascar"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis nihil repellat doloribus, unde minus perferendis error quo quae excepturi, sint, saepe laborum praesentium! Porro atque aliquid quas aut dolor."
      />,
    );

  return (
    <div className="chat">
      {messages.map(msg => {
        return <div className="chat__message">{msg}</div>;
      })}
    </div>
  );
};
