import { Controller, Delete, Get, Param, Redirect } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Redirect('https://nest.com', 301)
  @Get(':id')
  findOne(@Param('id') id: string) {
    // NestJS 는 객체를 리턴하면 자동으로 JSON 스트링으로 직렬화를 수행한다.
    return {
      url: 'test url',
      statusCode: 301,
    };
  }

  // @Delete(':userId/memo/:memoId')
  // deleteUserMemo(@Param() params: { [key: string]: string }) { 명시성이 떨어지기 때문에 권장하지 않는다.
  //   params.userId;
  //   params.memoId;
  // }

  @Delete(':userId/memo/:memoId')
  deleteUserMemo(
    @Param('userId') userId: string,
    @Param('memoId') memoId: string,
  ) {
    userId;
    memoId;
  }
}
