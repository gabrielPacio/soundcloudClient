import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import * as SC from 'soundcloud';
import * as global_vars from '../global_vars';

@Injectable()
export class SoundcloudService {

    constructor() {
    }

    public initializeSoundcloud(client_id): void {

            SC.initialize({
                client_id: client_id
            });
    }

    public getTracks(query: string, size: number, pagination: number): Observable<any> {
        const getTrackObs = Observable.fromPromise(
            SC.get('/tracks', {
                q: query,
                limit: size,
                offset: pagination
            })
        );
        return getTrackObs;
    }
}
