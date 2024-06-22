/*
1570. Dot Product of Two Sparse Vectors (https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description/)

Given two sparse vectors, compute their dot product.

Implement class SparseVector:

SparseVector(nums) Initializes the object with the vector nums
dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?

Example 1:

Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8

*/

class SparseVector {
  constructor(nums) {
    this.nums = nums;
  }

  dotProduct(vector) {
    let sum = 0;
    this.nums.map((m, index) => {
      sum += m * vector.nums[index];
    });
    return sum;
  }
}

let v1 = new SparseVector([0, 1, 0, 0, 2, 0, 0]);
let v2 = new SparseVector([1, 0, 0, 0, 3, 0, 4]);

class SparseVectorOptimal {
  constructor(nums) {
    this.nums = {};
    for (let index = 0; index < nums.length; index++) {
      let element = nums[index];
      if (element !== 0) {
        this.nums[index] = element;
      }
    }
  }

  dotProduct(vec) {
    let sum = 0;
    Object.entries(this.nums).map(([val, key]) => {
      if (vec.nums[val]) {
        sum += key * vec.nums[val];
      }
    });
    return sum;
  }
}

let v3 = new SparseVectorOptimal([1, 0, 0, 2, 3]);
let v4 = new SparseVectorOptimal([0, 3, 0, 4, 0]);

console.log(v3.dotProduct(v4), "teagg");
