import React from 'react';
import { MapPin, Clock } from "lucide-react";

const AboutMascote: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sobre Restaurante e Pizzaria Mascote</h2>
        <p className="text-lg text-gray-600 mb-6">
          O Mascote Restaurante e Pizzaria está localizado há 29 anos na mesma região, oferecendo os melhores pratos do Litoral Paulista, com um cardápio variado. Temos uma variedade de pizzas no forno à lenha e, aos sábados, um irresistível buffet de feijoada.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Um ambiente familiar e aconchegante, disponibilizando TV, WI-FI, entre outros. Venha conhecer os proprietários da casa, Sr. Clemens e Sr. Mascote, e experimentar nosso delicioso Abadejo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Localização</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Balneário Flórida, Praia Grande - SP</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Segunda não abre</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Ter - Dom das 11:30 as 23:30</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-800">Aceitamos todos os cartões!!!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMascote;
