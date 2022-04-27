import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginPlayerDto, RegisterPlayerDto } from '@dtos/player.dto';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterPlayerCommand } from '@cqrs/commands/player/register-player/register-player.command';
import { LocalAuthGuard } from '../auth/local/local-auth.guard';
import { LoginPlayerCommand } from '@cqrs/commands/player/login-player/login-player.command';

@Controller('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/player')
  async registerPlayer(@Body() dto: RegisterPlayerDto) {
    await this.commandBus.execute(new RegisterPlayerCommand(dto));
  }

  @UseGuards(LocalAuthGuard)
  @Post('/session')
  async loginPlayer(@Body() dto: LoginPlayerDto) {
    await this.commandBus.execute(new LoginPlayerCommand(dto));
  }
}
