import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, password, username } = body;

  if (!name || !email || !password || !username) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      username,
    },
  });

  return NextResponse.json(user);
}
