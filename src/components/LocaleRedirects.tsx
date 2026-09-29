import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { isLocale, localizedPath, stripLocalePrefix } from "../i18n";

export function RuAliasRedirect() {
  const { pathname, search, hash } = useLocation();
  const target = `${stripLocalePrefix(pathname)}${search}${hash}`;
  return <Navigate to={target} replace />;
}

export function LegacyLangQueryRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get("lang");
    if (!isLocale(langParam)) return;

    params.delete("lang");
    const search = params.toString();
    const pathname = localizedPath(location.pathname, langParam);
    const target = `${pathname}${search ? `?${search}` : ""}${location.hash}`;
    navigate(target, { replace: true });
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}
