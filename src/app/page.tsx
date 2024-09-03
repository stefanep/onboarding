import Equipe from "@/components/equipe";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2, User2 } from "lucide-react";
import Image from "next/image";

export default function Home() {

  return (
    <main className="sm:ml-14 p-4 min-h-screen">
      <h1 className="text-6xl mb-4 font-extrabold bg-gradient-to-r from-[#162F61] via-[#1FA8E0] to-[#137BC0] text-transparent bg-clip-text mb-8 drop-shadow-lg">
        Seja Bem Vindo(a) à South
      </h1>


      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Equipe />

        <Card className="shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-[#137BC0] to-[#1FA8E0] p-4 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg sm:text-xl select-none font-semibold">
                Dashboard de Entrega de Demandas no Runrun.it
              </CardTitle>
              <Settings2 className="text-white" />
            </div>
          </CardHeader>

          <CardContent className="p-6 bg-white">
            <CardDescription className="mt-2 text-gray-700">
              Essa estrutura ajuda a garantir que todos os aspectos da mudança sejam documentados de maneira clara e compreensível para todas as partes envolvidas.
            </CardDescription>

            <div className="mt-4">
              <ol className="list-decimal list-inside text-base sm:text-sm leading-relaxed space-y-2">
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Descrição do que foi alterado:</span> Detalhes sobre a alteração específica feita no sistema.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Objetivo Principal:</span> O propósito da mudança.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Telas Impactadas (BACK/FRONT):</span> Quais partes do sistema são afetadas.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Mensagens de Erro Novas e Como Tratá-las:</span> Informações sobre novas mensagens de erro e como lidar com elas.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Mensagem que Precisa de Atenção:</span> Mensagens ou alertas específicos que precisam de atenção especial.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Testes em Produção:</span> Quais testes são necessários em produção.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Testes Diários:</span> Testes que só podem ser feitos no dia a dia e sua duração.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Integrações Externas:</span> Novas integrações e integrações existentes que são impactadas.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Alterações no Servidor:</span> Mudanças necessárias no servidor.
                </li>
                <li className="bg-[#cfe9ff] p-3 rounded-lg shadow-sm">
                  <span className="font-bold">Setores Impactados:</span> Áreas ou departamentos da empresa que serão afetados pela mudança.
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-[#137BC0] to-[#1FA8E0] p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-white select-none">
                Squads
              </CardTitle>
              <span className="text-sm text-gray-200">Atualizada</span>
            </div>
          </CardHeader>

          <CardContent className="mt-2">
            <div className="space-y-7">
              <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-[#137BC0]">Desenvolvimento</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">

                  <div className="bg-white p-3 rounded-md shadow">
                    <h4 className="text-md font-semibold text-gray-700">Diretor</h4>
                    <p className="text-sm text-gray-600">Renner Fernandes</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h4 className="text-md font-semibold text-gray-700">Gestor</h4>
                    <p className="text-sm text-gray-600">Thiago Rodrigues</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow">
                    <h4 className="text-md font-semibold text-gray-700">Product Owner</h4>
                    <p className="text-sm text-gray-600">Carlos Galis</p>
                    <p className="text-sm text-gray-600">Tiago Batista</p>
                    <p className="text-sm text-gray-600">Natália</p>
                  
                  </div>

                  <div className="bg-white p-3 rounded-md shadow col-span-1">
                    <h4 className="text-md font-semibold text-gray-700">Back-End</h4>
                    <p className="text-sm text-gray-600">Antônio</p>
                    <p className="text-sm text-gray-600">Milton</p>
                    <p className="text-sm text-gray-600">Thiago Vieira</p>
                    <p className="text-sm text-gray-600">Luiz Fernando</p>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow col-span-2">
                    <h4 className="text-md font-semibold text-gray-700">Front-End</h4>
                    <p className="text-sm text-gray-600">Caio</p>
                    <p className="text-sm text-gray-600">Luiz Gustavo</p>
                    <p className="text-sm text-gray-600">Brendon</p>
                    <p className="text-sm text-gray-600">Samuel</p>
                    <p className="text-sm text-gray-600">Stefane</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-[#137BC0] to-[#1FA8E0] p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-white select-none">
                Plantão
              </CardTitle>
              <span className="text-sm text-gray-200">Setembro 2024</span>
            </div>
          </CardHeader>

          <CardContent className="mt-4">
            <CardDescription className="mb-4 text-gray-700">
              A cada sábado, são escalados dois desenvolvedores e um backend para fazer plantão, de acordo com a escala definida pelo gestor.
            </CardDescription>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg shadow-sm">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#F5F7FA] text-left text-[#137BC0] uppercase tracking-wider">
                      DATA
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#F5F7FA] text-left text-[#137BC0] uppercase tracking-wider">
                      BACK-END
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-[#F5F7FA] text-left text-[#137BC0] uppercase tracking-wider">
                      FRONT-END
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-white hover:bg-[#f0f4f8]">
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">07/09/2024</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">Antônio</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">Samuel / Stefane</td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-[#f0f4f8]">
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">14/09/2024</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">Thiago Vieira</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">Brendon / Luiz Gustavo</td>
                  </tr>
                  <tr className="bg-white hover:bg-[#f0f4f8]">
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">21/09/2024</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">Milton</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800">Luiz Fernando / Caio</td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-[#f0f4f8]">
                    <td className="px-6 py-4 text-gray-800">28/09/2024</td>
                    <td className="px-6 py-4 text-gray-800">Antônio</td>
                    <td className="px-6 py-4 text-gray-800">Thiago Rodrigues</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>


      </section>

    </main>

  );
}
