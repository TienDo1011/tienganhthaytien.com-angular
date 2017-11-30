import { Injectable } from '@angular/core';
import * as rules from './rules.json';

@Injectable()
export class RulesService {

  private rules = rules;

  constructor() { }

  getRule(rule) {
    return this.rules[rule];
  }
}
