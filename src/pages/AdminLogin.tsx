import { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { Lock, AlertTriangle, CheckCircle } from "lucide-react"

import api from '@/lib/api'

import { useNavigate } from 'react-router-dom';

import type { AxiosError } from 'axios'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !password) {
      setError('Por favor, insira tanto o email quanto a senha.')
    } else {
      setError('')

      try {
        const { headers: { authorization } } =
          await api.post('/auth/sign_in', { email, password })

        setSuccess(true)

        localStorage.setItem('auth-token', authorization);
      } catch (e) {
        const axiosError = e as AxiosError

        const axiosErrorResponseData = axiosError.response?.data as { errors: string[], success: boolean }

        if (axiosErrorResponseData?.errors && axiosErrorResponseData?.errors[0] === "Invalid login credentials. Please try again.") {
          setError('Email ou senha inválidos.')
          return
        }

        setError('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.')
      }
    }
  }

  useEffect(() => {
    async function validateToken() {
      const authToken = localStorage.getItem('auth-token');

      if (authToken) {
        try {
          const { data: { success } } = await api.get('/auth/validate_token', {
            headers: {
              'Authorization': authToken,
            }
          });

          if (success) {
            setIsUserAuthenticated(true)
            navigate('/admin')
          }
        } catch {
          localStorage.removeItem('auth-token');
        }
      }
    };

    validateToken();
  }, [navigate]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/admin');
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [navigate, success])

  if (isUserAuthenticated) return null

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login Administrativo</CardTitle>
          <CardDescription className="text-center">
            Insira suas credenciais para acessar o painel administrativo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
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
                    <AlertDescription>Login bem-sucedido. Redirecionando para o painel...</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                <Lock className="mr-2 h-4 w-4" /> Entrar
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-600 w-full">
            Área protegida. Somente pessoal autorizado.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
