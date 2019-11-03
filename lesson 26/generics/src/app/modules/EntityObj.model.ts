import Entity from './Entity.model';

export default interface EntityObj<T> extends Entity {
    person: T;
}