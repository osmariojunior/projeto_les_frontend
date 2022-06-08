import React from 'react';

export function Sidebar({children, ...props}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="">
        <h1 className="">
          Pedro Barbosa
        </h1>
        <p>Profissão</p>
      </div> 
      <hr/>
      <div className="">
        Quem viu seu perfil
        Impressões de sua publicação
      </div>
    </div>
  );
}