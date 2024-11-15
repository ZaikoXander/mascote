import { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { UserPlus, AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react"

import api from '@/lib/api'

import { Link, useNavigate } from 'react-router-dom'

export default function CreateAdmin() {
  const navigate = useNavigate();

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function resetFormValues() {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  useEffect(() => {
    async function validateToken() {
      const authToken = localStorage.getItem('auth-token')
  
      try {
        await api.get('/auth/validate_token', {
          headers: {
            'Authorization': authToken
          } 
        })

        setIsUserAuthenticated(true)
      } catch (error) {
        console.error(error)
        localStorage.removeItem('auth-token')
        navigate('/admin/login')
      }
    }

    validateToken()
  }, [navigate])

  if (!isUserAuthenticated) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.')
      return
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    try {
      await api.post('/auth', {
        email,
        password,
        password_confirmation: confirmPassword,
      })

      setError('')
      setSuccess(true)

      resetFormValues()
    } catch (error) {
      console.error(error)

      setError('Ocorreu um erro ao criar a nova conta de administrador.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para o Dashboard
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Criar Novo Administrador
          </CardTitle>
          <CardDescription className="text-center">
            Adicione um novo administrador ao sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input 
                  id="confirmPassword" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert variant="default" className="bg-green-100 text-green-800 border-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Sucesso</AlertTitle>
                  <AlertDescription>
                    Nova conta de administrador criada com sucesso.
                  </AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                <UserPlus className="mr-2 h-4 w-4" /> Criar Administrador
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-600 w-full">
            Apenas administradores existentes podem criar novas contas de administrador.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}