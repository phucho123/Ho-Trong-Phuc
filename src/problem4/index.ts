var sum_to_n_a = function (n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

var sum_to_n_b = function (n: number): number {
    return (n + 1) * n / 2;
};

var sum_to_n_c = function (n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n + sum_to_n_c(n - 1);
    }
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));