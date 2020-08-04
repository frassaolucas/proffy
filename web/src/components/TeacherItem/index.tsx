import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/48368446?s=460&u=7de16bf897bd7213bf84f8da03590d64b32cba69&v=4" alt="Lucas Frassão" />

        <div>
          <strong>Lucas Frassão</strong>
          <span>Inglês</span>
        </div>
      </header>

      <p>
        Não sabe falar direito, mas ensina o que consegue.
            <br /><br />
            Aprendeu a maior parte do que sabe pelo jogo online, com um dicionário do lado, matando mais palavras que um serial killer.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;