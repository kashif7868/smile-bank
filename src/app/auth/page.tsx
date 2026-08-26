import AuthPage from "../../components/Auth/AuthPage";

interface AuthRoutePageProps {
  searchParams: Promise<{
    mode?: string;
    redirect?: string;
  }>;
}

function getSafeRedirectPath(
  redirect?: string,
): string | undefined {
  if (!redirect) {
    return undefined;
  }

  if (
    !redirect.startsWith("/") ||
    redirect.startsWith("//")
  ) {
    return undefined;
  }

  return redirect;
}

export default async function AuthRoutePage({
  searchParams,
}: AuthRoutePageProps) {
  const params = await searchParams;

  const redirectPath =
    getSafeRedirectPath(params.redirect);

  return (
    <AuthPage
      initialMode={params.mode}
      redirectPath={redirectPath}
    />
  );
}