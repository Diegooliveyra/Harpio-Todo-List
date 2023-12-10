import { connectToDatabase } from '@/helpers/server-helpers';
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma';
import { StatusEnum } from '@prisma/client';

export const POST = async (req: Request) => {
  try {
    const { description, status } = await req.json();

    if (!description || !status) {
      return NextResponse.json({ message: 'Invalid data', status: 422 });
    }

    await connectToDatabase();

    const typedStatus: StatusEnum = status;

    const task = await prisma.task.create({
      data: {
        description,
        status: typedStatus,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `Server Error : ${error}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') as StatusEnum;
    const pageParam = searchParams.get('page');
    const sizeParam = searchParams.get('size');

    const currentPage = pageParam ? +pageParam : 1;
    const pageSize = sizeParam ? +sizeParam : 10;

    await connectToDatabase();

    const queryOptions: {
      where?: { status: StatusEnum };
      skip?: number;
      take?: number;
      orderBy?: { createdAt: 'asc' | 'desc' };
    } = {};

    if (status) {
      queryOptions.where = { status: StatusEnum[status] };
    }

    if (currentPage && pageSize) {
      queryOptions.skip = (currentPage - 1) * +pageSize;
      queryOptions.take = pageSize;
    }

    queryOptions.orderBy = { createdAt: 'desc' };

    const [tasks, totalElements] = await Promise.all([
      prisma.task.findMany(queryOptions),
      prisma.task.count({
        where: { status: StatusEnum[status] },
      }),
    ]);

    const totalPages = Math.ceil(totalElements / +pageSize!);

    return NextResponse.json(
      {
        content: tasks,
        totalElements,
        totalPages,
        pageSize,
        currentPage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
