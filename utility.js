class Utility{

    static filter(array, func){
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (func(element)) {
                tempArray.push(element)
            }
        }
        return tempArray;
    }

    static map(array, func){
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const newElement = func(element);
            tempArray.push(newElement);
        }
        return tempArray;
    }

    static reduce(array, func, start){
        let previous;
        let startIndex;
        if (start !== undefined){
            previous = start;
            startIndex = 0;
        } else {
            previous = array[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < array.length; i++) {
            const current = array[i];
            previous = func(previous, current);
        }
        return previous;
    }

}