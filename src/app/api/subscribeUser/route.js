// src/app/api/subscribeUser/route.js

import fetch from "node-fetch"; // or "isomorphic-unfetch", depending on your environment

export async function POST(req) {
  try {
    const { email } = await req.json(); // Since it's a POST request, get the email from the body

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    
    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      return new Response(
        JSON.stringify({
          error: `There was an error subscribing to the newsletter. Please contact me at peter@peterlunch.com.`,
        }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify({ message: "Subscribed successfully" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || error.toString() }), {
      status: 500,
    });
  }
}
