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
    // a.constructor.prototype.multiply = function () {
    //     this.push(...this.map(t => t * t));
    // };
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // Best solution
    // multiply = function () {
    //     this.push(...this.map(t => t * t));
    // };

    function multiply() {
        this.push(...this.map(t => t * t));
    };

    // multiply.bind(a)();

    bind = Function.prototype.call.bind(Function.prototype.bind);
    bind(multiply,a)();

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

    // a.multiply();

    console.log(a);
};

TestB = () => {
    console.log(0.2 + 0.1 === 0.3);
    // false
    console.log(0.2 + 0.1 == 0.3);
    // false
    console.log(0.2 + 0.1 === 0.3);
    // false
    console.log((0.2 * 10 + 0.1 * 10) / 10);
    console.log(0.2 + 0.1);
};

TestCallback = () => {
    var http = require("http");

    http
        .request("http://localhost:3000/students", response => {
            response.on("data", data => {
                students = JSON.parse(data);
                result = [];
                students.forEach(s => {
                    result.push({ id: s.id, name: s.name, average: 0 });
                    http
                        .request(
                            "http://localhost:3000/courses?studentId=" + s.id,
                            response => {
                                response.on("data", data => {
                                    coursnode = JSON.parse(data);
                                    s.courseCount = course.length;
                                    s.totalScores = 0;
                                    course.forEach(c => {
                                        http
                                            .request(
                                                "http://localhost:3000/" + c.id + "?id=" + s.id,
                                                response => {
                                                    response.on("data", data => {
                                                        score = JSON.parse(data);
                                                        score.forEach(sc => {
                                                            s.totalScores += sc.score;
                                                        });
                                                    });

                                                    response.on("end", () => {
                                                        if (
                                                            course[course.length - 1] == c &&
                                                            students[students.length - 1] == s
                                                        ) {
                                                            result.forEach(r => {
                                                                std = students.find(std => std.id == r.id);
                                                                r.average = std.totalScores / std.courseCount;
                                                            });
                                                            console.log(JSON.stringify(students));
                                                            console.log(JSON.stringify(result));
                                                        }
                                                    });
                                                }
                                            )
                                            .end();
                                    });
                                });
                            }
                        )
                        .end();
                });
            });
        })
        .end();
};

TestPromise = () => {
    var rp = require("request-promise");

    var options = {
        uri: "http://localhost:3000/students",
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(students => {
            result = [];
            students.forEach(s => {
                result.push({ id: s.id, name: s.name, average: 0 });

                var courseoptions = {
                    uri: "http://localhost:3000/courses?studentId=" + s.id,
                    json: true // Automatically parses the JSON string in the response
                };

                rp(courseoptions)
                    .then(course => {
                        s.courseCount = course.length;
                        s.totalScores = 0;
                        course.forEach(c => {
                            var scoreoptions = {
                                uri: "http://localhost:3000/" + c.id + "?id=" + s.id,
                                json: true // Automatically parses the JSON string in the response
                            };

                            rp(scoreoptions)
                                .then(score => {
                                    score.forEach(sc => {
                                        s.totalScores += sc.score;

                                        if (
                                            course[course.length - 1] == c &&
                                            students[students.length - 1] == s
                                        ) {
                                            result.forEach(r => {
                                                std = students.find(std => std.id == r.id);
                                                r.average = std.totalScores / std.courseCount;
                                            });
                                            console.log(JSON.stringify(students));
                                            console.log(JSON.stringify(result));
                                        }

                                    });
                                })
                                .catch(err => {

                                })
                        });
                    })
                    .catch(err => {
                        // API call failed...
                    });
            });
        })
        .catch(err => {
            // API call failed...
        });
};

TestAsyncAwait = async () =>{
    var rp = require("request-promise");

    var result = [];
    var options = {
        uri: "http://localhost:3000/students",
        json: true // Automatically parses the JSON string in the response
    };

    students = await rp(options);

    for (var s of students) {
        result.push({ id: s.id, name: s.name, average: 0 });

        options.uri = "http://localhost:3000/courses?studentId=" + s.id;
        courses = await rp(options);
        
        s.courseCount = courses.length;
        s.totalScores = 0;

        for (var c of courses) {
            options.uri = "http://localhost:3000/" + c.id + "?id=" + s.id;
            scores = await rp(options);

            scores.forEach(sc => {
                s.totalScores += sc.score;
            })
        }
    }

    result.forEach(r => {
        std = students.find(std => std.id == r.id);
        r.average = std.totalScores / std.courseCount;
    });

    console.log(JSON.stringify(students));
    console.log(JSON.stringify(result));

}

TestGenerator = () =>{
    var co = require('co');
    var rp = require("request-promise");

    var options = {
        uri: "http://localhost:3000/students",
        json: true // Automatically parses the JSON string in the response
    };

    co(function *(){
        try {
          var students = yield rp(options);
          result = [];
        //   console.log(students);

          for (var s of students) {
            result.push({ id: s.id, name: s.name, average: 0 });
    
            options.uri = "http://localhost:3000/courses?studentId=" + s.id;
            courses = yield rp(options);
            // console.log(courses);

            s.courseCount = courses.length;
            s.totalScores = 0;
    
            for (var c of courses) {
                options.uri = "http://localhost:3000/" + c.id + "?id=" + s.id;
                scores = yield rp(options);
    
                scores.forEach(sc => {
                    s.totalScores += sc.score;
                })
            }
        }

        result.forEach(r => {
            std = students.find(std => std.id == r.id);
            r.average = std.totalScores / std.courseCount;
        });
    
        // console.log(JSON.stringify(students));
        console.log(result);


        } catch(e) {
          console.log(e.code) // ENOTFOUND
       }
      });

}

TestObservable = () => {
    const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
    const { map, reduce, mergeMap, tap } = require('rxjs/operators');
    const rp = require("request-promise");

    var options = {
        uri: "http://localhost:3000/students",
        json: true // Automatically parses the JSON string in the response
    };

    const listToObservable = mergeMap((val) => from(val));

    const makeHttpRequest = mergeMap((val) => from(rp(val)));

    const maptoStudentCourse = (x) => map((v)=>{ return {...v,name: x.find(t => t.id == v.studentId).name}});

    const maptoStudentScore = (x) => map((v)=>{ return {...v,name: x.name}});

    const buildCourseOptions = map(x => {
        return {
            uri: "http://localhost:3000/courses?studentId=" + x.id,
            json: true
        };
    });

    const buildScoreOptions = map(x => {
        return {
            uri: "http://localhost:3000/" + x.id + "?id=" + x.studentId,
            json: true
        };
    });

    const accumulate = reduce((acc, curr) => {
        // console.log(acc);
        // console.log(curr);
        if (!Array.isArray(acc)) {
            result = [];
            result.push({ id: acc.id, name: acc.name, average: acc.score, totalscore: acc.score, count: 1 });
            acc = result;
        }
        rst = acc.find(r => curr.id == r.id);
        if (rst) {
            rst.totalscore += curr.score
            rst.count += 1
            rst.average = rst.totalscore / rst.count
        }
        else {
            result.push({ id: curr.id, name: curr.name, average: curr.score, totalscore: curr.score, count: 1 });
        }
        return acc;
        // console.log(acc)
        // return 0;
    });

    const getCourseOfStudents = mergeMap((val) => from(val).pipe(
        buildCourseOptions,
        makeHttpRequest,
        listToObservable,
        maptoStudentCourse(val)
        ));

    const getScoreOfCourse = mergeMap((val) => of(val).pipe(
        buildScoreOptions,
        makeHttpRequest,
        listToObservable,
        maptoStudentScore(val)
    ));

    from(rp(options)).pipe(
        getCourseOfStudents,
        getScoreOfCourse,
        accumulate
        ).subscribe(t => console.log(t));

}

TestA();
