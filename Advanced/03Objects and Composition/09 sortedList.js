function createSortedList() {
    let list = [];

    return {
        add(element){
            list.push(element);
            this.size++;
            list.sort((a,b) => a - b);
        },
        remove(index){
            if (index < 0 || index >= list.length) {
                throw new RangeError('Index out of range');
            }
            list.splice(index, 1);
            this.size--;
        },
        get(index){
            if (index < 0 || index >= list.length) {
                throw new RangeError('Index out of range');
            }
            return list[index];
        },
        size: 0
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));