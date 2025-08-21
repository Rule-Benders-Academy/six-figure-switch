import type { NextApiRequest, NextApiResponse } from "next";

interface CustomerResponse {
  name: string | null;
  email: string | null;
  customData: string | null;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { customerId } = req.body;

  if (!customerId) {
    return res.status(400).json({ error: "Missing customerId" });
  }

  try {
    const response = await fetch(
      `https://sandbox-api.paddle.com/customers/${customerId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer pdl_sdbx_apikey_01k3307tsyrfpe5mckn12mqbd7_VjEMCYz9F3TTCmahYfnGaB_Ap6",
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Paddle API error:", text);
      return res.status(500).json({ error: "Failed to fetch customer" });
    }

    const data = await response.json();
    const customer = data.data || {};

    console.log("Customer fetched:", customer);

    res.status(200).json({
      name: customer.name || "Customer", // fallback if name is null
      email: customer.email || null,
      customData: customer.custom_data || null,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Failed to fetch customer" });
  }
}
