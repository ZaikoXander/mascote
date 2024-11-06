import { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import useMessageStore from "@/store/useMessagesStore";

import { formatDateTime } from "./helper";

export default function Message() {
  const { id } = useParams<{ id: string }>();
  const { getMessageById, fetchMessages } = useMessageStore();

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])
  
  const message = getMessageById(Number(id));

  if (!message) {
    return (
      <>
        <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para o Dashboard
        </Link>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Mensagem não encontrada
            </CardTitle>
          </CardHeader>
        </Card>
      </>
    )
  }

  return (
    <>
      <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para o Dashboard
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Detalhes da Mensagem de Contato
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="font-semibold">Nome</Label>
              <p>{message.name}</p>
            </div>
            <div>
              <Label className="font-semibold">Email</Label>
              <p>{message.email}</p>
            </div>
            <div>
              <Label className="font-semibold">Assunto</Label>
              <p>{message.subject}</p>
            </div>
            <div>
              <Label className="font-semibold">Data</Label>
              <p>{formatDateTime(message.created_at)}</p>
            </div>
          </div>
          <div>
            <Label className="font-semibold">Conteúdo da Mensagem</Label>
            <p className="mt-2 whitespace-pre-wrap">{message.content}</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
