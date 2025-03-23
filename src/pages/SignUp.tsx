
import React from "react";
import Layout from "@/components/Layout";
import UserSignUpForm from "@/components/UserSignUpForm";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <Layout className="pt-16">
      <div className="max-w-md mx-auto p-6 my-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Criar Conta</h1>
          <p className="text-muted-foreground mt-2">
            Entre com seus dados para criar uma conta
          </p>
        </div>
        
        <UserSignUpForm />
        
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
