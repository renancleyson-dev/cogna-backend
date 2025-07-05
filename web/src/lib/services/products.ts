import { CONFIG } from "../config";
import { getToken } from "./auth";
import { redirect } from "next/navigation";

export type ShowProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export type ListProducts = {
  total: number;
  perPage: number;
  page: number;
  totalPages: number;
  result: ShowProduct[];
}

export async function getProducts(page: number) {
  const authToken = await getToken();
  const searchParams = new URLSearchParams();

  searchParams.set("page", `${page}`);
  const response = await fetch(
    new URL(`/produtos?${searchParams}`, CONFIG.API_URL),
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    },
  );

  if (response.status === 401) {
    redirect("/login");
  }

  const data: ListProducts = await response.json();
  return data;
}

export async function getProductDetails(id: number) {
  const authToken = await getToken();
  const response = await fetch(new URL(`/produtos/${id}`, CONFIG.API_URL), {
    cache: "force-cache",
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });

  if (response.status === 401) {
    redirect("/login");
  }

  const data: ShowProduct = await response.json();
  return data;
}
