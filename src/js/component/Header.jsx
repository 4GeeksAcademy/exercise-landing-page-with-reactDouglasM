import React from "react";
import '/workspaces/exercise-landing-page-with-reactDouglasM/src/styles/index.css'

const Header = () => {
  return (
    <div className="card w-100 my-2 bg-custom-gray2">
      <div className="card-body py-5">
        <h1 className="card-title display-1 text-white fw-bold">Call Of Dutty</h1>
        <p className="card-text fs-3 text-white">Es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision. La franquicia comenzó para computadora personal y posteriormente fue expandiéndose hacia videoconsolas de sexta y séptima generación, tanto de sobremesa como portátiles, llegando así a lanzar varios juegos derivados de forma paulatina con la serie principal. La serie inicialmente se ambientaba en la Segunda Guerra Mundial, retratando personajes y combates acaecidos durante dicho conflicto bélico. Esto fue cambiando hasta la actualidad, donde los argumentos suceden en ambientes contemporáneos y ficticios, como se puede ver en Call of Duty: Black Ops y Call of Duty: Black Ops Cold War, en la Guerra Fría, o Call of Duty: Modern Warfare, Call of Duty: Modern Warfare 2 y Call of Duty: Modern Warfare 3, ambientados en la Tercera Guerra Mundial; o en futuros tecnológicos como en Call of Duty: Black Ops 2, Call of Duty: Advanced Warfare, Call of Duty: Black Ops 3, Call of Duty: Infinite Warfare y Call of Duty: Black Ops 4. Desde Call of Duty 4: Modern Warfare hasta Call of Duty: Advanced Warfare los DLCs de las distintas entregas se lanzaban con unos meses de adelanto en las plataformas Xbox 360 y Xbox One. </p>
        <a href="#" className="btn btn-secondary btn-lg fs-3">Call to action!</a>
      </div>
    </div>
  )
};

export default Header;