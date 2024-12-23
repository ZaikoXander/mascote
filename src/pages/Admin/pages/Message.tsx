import { useNavigate, useParams } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import useMessagesStore from "../store/useMessagesStore";

import { formatDateTime } from "../helper";

import DashboardLink from "../components/DashboardLink";

export default function Message() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { getMessageById } = useMessagesStore();
  
  const message = getMessageById(Number(id));

  if (!message) {
    setTimeout(() => { navigate('/admin') }, 2000)

    return (
      <>
        <DashboardLink />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Mensagem não encontrada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Redirecionando para a página do Dashboard...</p>
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <DashboardLink />
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
