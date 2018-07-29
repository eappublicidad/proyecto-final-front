import { IProxy } from './iproxy';
import { AbstractProxy } from "./abstract.proxy";
import { API } from '../../config/api';

export class PostProxy extends AbstractProxy implements IProxy {
    get(id: any) {
        return new Promise((resolve, reject) => {
            console.log('post-get');
            this.consult(`${API.post.get}/${id}`, {}, 'get')
                .subscribe(
                    resolve,
                    error => {
                        reject(error);
                    }
                );
        });
    }
    save(id: any, data: Object) {
        return new Promise((resolve, reject) => {
            console.log('post-save');
            var request: any;
            if (id) {
                request = this.consult(`${API.post.save}/${id}`, data, 'put')
            } else {
                request = this.consult(API.post.save, data, 'post')
            }

            request.subscribe(
                resolve,
                error => {
                    reject(error);
                }
            );
        });
    }
    delete(id: number) {
        return new Promise((resolve, reject) => {
            console.log('post-delete');
            this.consult(API.post.delete, { id }, 'delete')
                .subscribe(
                    resolve,
                    error => {
                        reject(error);
                    }
                );
        });
    }
}