/**
 * Created by: deepali arvind
 * Date: 15/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component(
{
	selector: 'first',
	templateUrl: 'first.component.html'
})
export class FirstComponent implements OnInit
{
	
	constructor( private router: Router)
	{
	}
	ngOnInit()
	{
	}
	
}

