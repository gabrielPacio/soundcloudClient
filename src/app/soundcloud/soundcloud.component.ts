import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import * as SC from 'soundcloud';
import * as global_vars from './../global_vars';
import {SoundcloudService} from './soundcloud.service';

@Component({
  selector: 'soundcloud-component',
  templateUrl: 'soundcloud.component.html',
  styleUrls: ['soundcloud.component.scss']
})

export class SoundcloudComponent implements OnInit {

    public inputText: string;
    public maxLengthInput: number = global_vars.MAX_LENGTH_INPUT;
    public trackList: Array<any>;
    private currentPagination = 1;

    constructor(private soundlcloudService: SoundcloudService) {
    }

    ngOnInit() {
        this.soundlcloudService.initializeSoundcloud(global_vars.CLIENT_ID);
    }

    private getTracks(): void {
        this.soundlcloudService.getTracks(this.inputText, global_vars.PAGINATION_COUNT, this.currentPagination).subscribe(res => {
            this.trackList = res;
        });
    }

    public startSearch(): void {
        this.getTracks();
    }

    public nextPagination(): void {
        this.currentPagination ++;
        this.getTracks();
    }

    public previousPagination(): void {
        if (this.currentPagination > 1) {
            this.currentPagination --;
            this.getTracks();
        }
    }

    public onKeyUp(event): void {
        if (event.key === 'Enter') {
            this.getTracks();
        }
        this.currentPagination = 1;
    }
}
