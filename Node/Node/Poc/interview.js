TestA = () => {
    const a = [1, 2, 3, 4, 5];

    // It works
    // Array.prototype.multiply=function(){
    // 	this.push(...(this.map(t => t * t)));
    // }
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // It works
    // a.constructor.prototype.multiply = () =>{
    //     a.push(...(a.map(t => t * t)));
    //     // this.push(...(this.map(t => t * t)));
    // }
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // It works
    a.constructor.prototype.multiply = function () {
        this.push(...this.map(t => t * t));
    };
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // It doesn't work
    // a.constructor.prototype.multiply = () =>{
    //     // this.push(...(this.map(t => t * t)));
    // }

    //It does not work as expection
    // a.multiply = () =>{
    //     a.push(...(a.map(t => t * t)));
    //     // this.push(...(this.map(t => t * t)));
    // }
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25, multiply: [Function] ]

    a.multiply();

    console.log(a);
};

TestB = () => {
    console.log(0.2 + 0.1 === 0.3);
    // false
    console.log((0.2 + 0.1) == 0.3);
    // false
    console.log(0.2 + 0.1 === 0.3);
    // false
    console.log((0.2 * 10 + 0.1 * 10) / 10);
    console.log(0.2 + 0.1);
}

TestCallback = () => {
    var http = require("http");

    http.request("http://localhost:3000/students", (response) => {
        response.on('data', (data) => {
            students = JSON.parse(data);
            result = [];
            students.forEach(s => {
                result.push({ "id": s.id, "name": s.name, "average": 0 });
                http.request("http://localhost:3000/courses?studentId=" + s.id, (response) => {
                    response.on('data', (data) => {
                        course = JSON.parse(data);
                        s.courseCount = course.length;
                        s.totalScores = 0;
                        course.forEach(c => {
                            http.request("http://localhost:3000/" + c.id + "?id=" + s.id, (response) => {
                                response.on('data', (data) => {
                                    score = JSON.parse(data);
                                    score.forEach(sc => {
                                        s.totalScores += sc.score;
                                    });
                                });

                                response.on('end', () => {
                                    if (course[course.length - 1] == c && students[students.length - 1] == s) {
                                        result.forEach(r => {
                                            std = students.find(std => std.id == r.id);
                                            r.average = std.totalScores / std.courseCount;
                                        });
                                        console.log(JSON.stringify(students));
                                        console.log(JSON.stringify(result));
                                    }
                                });
                            }).end();
                        });
                    });
                }).end();
            });

        });
    }).end();
}

TestCallback();