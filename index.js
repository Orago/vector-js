// @ts-check
/**
 * @typedef {Vector2 | { x: number, y: number }} position2D
 */

/** @type {position2D} */
export let position;


export class Vector2 {
	/**
	 * @param {Vector2} a 
	 * @param {Vector2} b 
	 * @returns {boolean}
	 */
	static equals (a, b){
		return (
			a instanceof Vector2 &&
			b instanceof Vector2 && 
			a.x === b.x &&
			a.y === b.y
		);
	}

	/**
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor (x = 0, y = 0){
		this.x = x;
		this.y = y;
	}

	get valid (){
		return typeof this.x === 'number' && typeof this.y === 'number';    
	}

	toString() {
		return `(${this.x}, ${this.y})`;
	}

  copy (){
    return new Vector2(
      this.x,
      this.y
    );
  }


  /**
   * @param {number | Vector2} x 
   * @param {number} [y]
   * @returns {Vector2}
   */
  move (x, y){
    let input = x;

    if (input instanceof Vector2){
      this.x += input.x;
      this.y += input.y;
    }
    else if (typeof x === 'number' && typeof y === 'number'){
      this.x += x;
      this.y += y;
    }

    return this;
  }
}



/**
 * @template valueType
 */
export class Vector2Map {
	/**
	 * @type {Map<string, [vector: Vector2, value: valueType]>}
	 */
	map = new Map();

  /**
   * @param {Vector2} vector 
   * @param {*} value 
   */
	set (vector, value) {
		this.map.set(vector.toString(), [vector, value]);
	}

  /**
   * @param {Vector2} vector 
   * @returns {valueType | undefined}
   */
	get (vector) {
		return this.map.get(vector.toString())?.[1];
	}

  /**
   * @param {Vector2} vector 
   * @returns {boolean}
   */
	has (vector) {
		return this.map.has(vector.toString());
	}

  /**
   * @param {Vector2} vector 
   * @returns {boolean}
   */
	delete (vector) {
		return this.map.delete(vector.toString());
	}

	clear () {
		this.map.clear();
	}

	keys () {
		return Array.from(this.map.values()).map(([vector]) => vector);
	}

	values () {
		return Array.from(this.map.values())
			.map(([vector, value]) => value);
	}

  /**
   * @returns {[Vector2, valueType][]}
   */
	entries () {
		return Array.from(this.map.values());
	}

	get size () {
		return this.map.size;
	}
}