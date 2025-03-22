import { NextResponse } from "next/server";

import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import {
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";

// GET /api/account
export async function GET() {
  try {
    await dbConnect();
    const account = await Account.find();
    if (!account) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// PUT /api/account

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validatedData = AccountSchema.safeParse(body);
    if (!validatedData.success)
      throw new ValidationError(validatedData.error.flatten().fieldErrors);

    const existingAccount = await Account.findOne({
      provider: validatedData.data.provider,
      providerAccountId: validatedData.data.providerAccountId,
    });
    if (!existingAccount)
      throw new ForbiddenError(
        "An account with the same provider already exists"
      );

    const newAccount = Account.create(validatedData.data);

    return NextResponse.json(
      { success: true, data: newAccount },
      { status: 201 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
