import Immutable from 'immutable';


class Todo {

    constructor(data = {}) {
        this.data = new Immutable.Map(data);
    }

    getId() {
        return this.data.get('id');
    }

    getTitle() {
        return this.data.get('title');
    }

    getDescription() {
        return this.data.get('description');
    }

    isComplete() {
        return this.data.get('complete');
    }

    isArchived() {
        return this.data.get('archived');
    }

    setComplete(complete) {
        return new Todo(this.data.set('complete', complete));
    }

    setArchived(archived) {
        return new Todo(this.data.set('archived', archived));
    }
}


export default Todo;