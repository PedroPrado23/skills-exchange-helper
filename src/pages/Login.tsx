
import React from "react";
import Layout from "@/components/Layout";
import UserLoginForm from "@/components/UserLoginForm";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <Layout className="pt-16">
      <div className="max-w-md mx-auto p-6 my-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Entrar</h1>
          <p className="text-muted-foreground mt-2">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>
        
        <UserLoginForm />
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Criar Conta
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
