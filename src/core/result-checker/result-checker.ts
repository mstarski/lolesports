import { AggregateRoot } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultChecker extends AggregateRoot {}
