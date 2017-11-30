import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RulesService } from './rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
  providers: [
    RulesService
  ]
})
export class RulesComponent implements OnInit {

  ruleHeader: string;
  ruleBody: object[];

  constructor(private route: ActivatedRoute, private ruleService: RulesService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.ruleHeader = this.ruleService.getRule(params.rule).header;
        this.ruleBody = this.ruleService.getRule(params.rule).body;
      });
  }

  siblingIsLink(index: number) {
    let nextElement: string;
    let previousElement: string;
    if (this.ruleBody[index + 1]) {
      nextElement = this.ruleBody[index + 1]['elementType'];
    }
    if (this.ruleBody[index - 1]) {
      previousElement = this.ruleBody[index - 1]['elementType'];
    }
    return { 'd-inline': nextElement === 'a' || nextElement === 'localA' ||
            previousElement === 'a' || previousElement === 'localA'};
  }

}
