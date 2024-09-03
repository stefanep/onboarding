import { Settings2, Text } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Equipe() {
    return (
        <Card className="shadow-xl rounded-lg overflow-hidden border border-gray-200 max-w-full">
            <CardHeader className="bg-gradient-to-r from-[#137BC0] to-[#1FA8E0] p-4 text-white">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg sm:text-xl font-semibold">
                        Softwares Empregados no Setor de Desenvolvimento
                    </CardTitle>
                    <Text className="text-white" />
                </div>
            </CardHeader>

            <CardContent className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Bitbucket</p>
                            <span className="text-[12px] sm:text-sm text-gray-600 mr-4">
                                Repositório
                            </span>
                        </div>
                        <a
                            href="https://bitbucket.org/"
                            className="block mt-3 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Runrun.it</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Kanban
                            </span>
                        </div>
                        <a
                            href="https://runrun.it/pt-BR"
                            className="block mt-3 text-center text-white bg-red-500 hover:bg-red-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">PhpStorm</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Framework
                            </span>
                        </div>
                        <a
                            href="https://www.jetbrains.com/pt-br/phpstorm/"
                            className="block mt-3 text-center text-white bg-purple-500 hover:bg-purple-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">DBeaver</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Banco de Dados
                            </span>
                        </div>
                        <a
                            href="https://dbeaver.io/download/"
                            className="block mt-3 text-center text-white bg-gray-500 hover:bg-gray-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Git</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Push
                            </span>
                        </div>
                        <a
                            href="https://git-scm.com/downloads"
                            className="block mt-3 text-center text-white bg-orange-500 hover:bg-orange-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">XAMPP</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Download
                            </span>
                        </div>
                        <a
                            href="https://www.apachefriends.org/pt_br/download.htmls"
                            className="block mt-3 text-center text-white bg-orange-500 hover:bg-orange-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Vs Code</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Download
                            </span>
                        </div>
                        <a
                            href="https://code.visualstudio.com/downloads"
                            className="block mt-3 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">FileZilla</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Download
                            </span>
                        </div>
                        <a
                            href="https://filezilla-project.org/"
                            className="block mt-3 text-center text-white bg-red-500 hover:bg-red-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>

                    <article className="border rounded-lg p-5 bg-white shadow hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">WampServer</p>
                            <span className="text-[12px] sm:text-sm text-gray-600">
                                Download
                            </span>
                        </div>
                        <a
                            href="https://sourceforge.net/projects/wampserver/"
                            className="block mt-3 text-center text-white bg-pink-500 hover:bg-pink-600 rounded-lg py-2 px-4 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redirect
                        </a>
                    </article>
                </div>
            </CardContent>
        </Card>
    );
}
