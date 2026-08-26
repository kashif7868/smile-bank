import AuthPage from "@/components/Auth/AuthPage";

interface AuthRoutePageProps {
  searchParams: Promise<{
    mode?: string;
    redirect?: string;
  }>;
}

export default async function AuthRoutePage({
  searchParams,
}: AuthRoutePageProps) {
  const params = await searchParams;

  return (
    <AuthPage
      initialMode={params.mode}
      redirectPath={params.redirect}
    />
  );
}