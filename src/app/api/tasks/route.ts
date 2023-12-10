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
    const page = searchParams.get('page');
    const size = searchParams.get('size');

    await connectToDatabase();

    const queryOptions: {
      where?: { status: StatusEnum };
      skip?: number;
      take?: number;
    } = {};

    if (status) {
      queryOptions.where = { status: StatusEnum[status] };
    }

    if (page && size) {
      queryOptions.skip = (+page - 1) * +size;
      queryOptions.take = +size;
    }

    const [tasks, totalTasks] = await Promise.all([
      prisma.task.findMany(queryOptions),
      prisma.task.count({
        where: { status: StatusEnum[status] },
      }),
    ]);

    const totalPages = Math.ceil(totalTasks / +size!);

    return NextResponse.json(
      {
        content: tasks,
        totalElements: totalTasks,
        totalPages,
        pageSize: +size!,
        currentPage: +page!,
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
